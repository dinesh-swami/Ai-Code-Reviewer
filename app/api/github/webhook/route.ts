import { handleGithubWebhook } from "@/features/github/server/webhook-handler";

export const runtime = "nodejs";

export const POST = handleGithubWebhook;
  