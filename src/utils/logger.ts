/** biome-ignore-all lint/suspicious/noConsole: Este é um utilitário de logger, o uso das chamadas ao console.() é intencional aqui.*/
export const logError = (message: string, error?: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(message, error);
  }
};

export const logWarning = (message: string, data?: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(message, data);
  }
};

export const logInfo = (message: string, data?: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.info(message, data);
  }
};
