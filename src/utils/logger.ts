/** biome-ignore-all lint/suspicious/noConsole: Este é um utilitário de logger, o uso das chamadas ao console.() é intencional aqui.*/
interface LogContext {
  [key: string]: unknown;
}

export const LogLevel = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  DEBUG: 'DEBUG',
} as const;

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

class Logger {
  private environment: string;
  private isDevelopment: boolean;

  constructor() {
    this.environment = process.env.NODE_ENV || 'development';
    this.isDevelopment = this.environment === 'development';
  }

  private formatData(data: unknown): unknown {
    if (data instanceof Error) {
      const errorDetails: { [key: string]: unknown } = {
        name: data.name,
        message: data.message,
        stack: data.stack,
      };

      for (const key of Object.keys(data)) {
        if (key !== 'name' && key !== 'message' && key !== 'stack') {
          errorDetails[key] = (data as object as Record<string, unknown>)[key];
        }
      }
      return errorDetails;
    }
    // Para outros tipos (objetos, arrays, primitivos), retorna como está
    return data;
  }

  private formatMessage(
    level: LogLevel,
    message: string,
    data?: unknown,
    context?: LogContext
  ) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data: this.formatData(data),
      context,
      environment: this.environment,
    };

    if (this.isDevelopment) {
      if (data || context) {
        return `${timestamp} [${level}] ${message}`;
      }
      return `${timestamp} [${level}] ${message}`;
    }
    return JSON.stringify(logEntry);
  }

  error(message: string, error?: unknown, context?: LogContext) {
    const formatted = this.formatMessage(
      LogLevel.ERROR,
      message,
      error,
      context
    );
    if (this.isDevelopment) {
      console.error(formatted, error || '', context || {});
    } else {
      // Em produção, enviar para um serviço de monitoramento de erros ou um endpoint de log
      console.error(formatted);
    }
  }

  warn(message: string, data?: unknown, context?: LogContext) {
    const formatted = this.formatMessage(LogLevel.WARN, message, data, context);
    if (this.isDevelopment) {
      console.warn(formatted, data || '', context || {});
    } else {
      console.warn(formatted);
    }
  }
  info(message: string, data?: unknown, context?: LogContext) {
    const formatted = this.formatMessage(LogLevel.INFO, message, data, context);
    if (this.isDevelopment) {
      console.info(formatted, data || '', context || {});
    } else {
      console.info(formatted);
    }
  }

  debug(message: string, data?: unknown, context?: LogContext) {
    if (this.isDevelopment) {
      const formatted = this.formatMessage(
        LogLevel.DEBUG,
        message,
        data,
        context
      );
      console.debug(formatted, data || '', context || {});
    }
  }
}

export const logger = new Logger();

export const logError = (
  message: string,
  error?: unknown,
  context?: LogContext
) => logger.error(message, error, context);
export const logWarning = (
  message: string,
  data?: unknown,
  context?: LogContext
) => logger.warn(message, data, context);
export const logInfo = (
  message: string,
  data?: unknown,
  context?: LogContext
) => logger.info(message, data, context);
export const logDebug = (
  message: string,
  data?: unknown,
  context?: LogContext
) => logger.debug(message, data, context);
