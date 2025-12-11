// Define interface for environment variables
interface EnvironmentVariables {
  NEXT_PUBLIC_API_BASE_URL: string;
  NEXT_PUBLIC_SSO_URL: string;
  NEXT_PUBLIC_MY_URL: string;
  NEXT_PUBLIC_CLIENT_ID: string;
  CLIENT_ID: string;
  NODE_ENV: string;
}

// Get environment variables with fallbacks
const getEnvironmentVariables = (): EnvironmentVariables => {
  return {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
    NEXT_PUBLIC_SSO_URL: process.env.NEXT_PUBLIC_SSO_URL || "",
    NEXT_PUBLIC_MY_URL: process.env.NEXT_PUBLIC_MY_URL || "",
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID || "",
    CLIENT_ID: process.env.CLIENT_ID || "b7890e8e-eaf6-4b4e-a015-c807ae6ae11e",
    NODE_ENV: process.env.NODE_ENV || "development",
  };
};

// Export environment variables
export const env = getEnvironmentVariables();

// Export individual variables for convenience
export const {
  NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_SSO_URL,
  NEXT_PUBLIC_MY_URL,
  NEXT_PUBLIC_CLIENT_ID,
  CLIENT_ID,
  NODE_ENV,
} = env;

// Export function to validate environment variables
export const validateEnvironment = (): boolean => {
  const requiredVars = [
    "NEXT_PUBLIC_API_BASE_URL",
    "NEXT_PUBLIC_SSO_URL",
    "NEXT_PUBLIC_MY_URL",
    "NEXT_PUBLIC_CLIENT_ID",
  ];

  const missingVars = requiredVars.filter(
    (varName) => !env[varName as keyof EnvironmentVariables],
  );

  if (missingVars.length > 0) {
    console.error("Missing required environment variables:", missingVars);
    return false;
  }

  return true;
};

// Export function to check if we're in development environment
export const isDevelopment = (): boolean => {
  return NODE_ENV === "development";
};

// Export function to check if we're in production environment
export const isProduction = (): boolean => {
  return NODE_ENV === "production";
};
