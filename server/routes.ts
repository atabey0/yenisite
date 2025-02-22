import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.addToWaitlist(data);
      res.json(entry);
    } catch (error) {
      res.status(400).json({ error: "Invalid email address" });
    }
  });

  app.get("/api/waitlist/count", async (_req, res) => {
    const count = await storage.getWaitlistCount();
    res.json({ count });
  });

  return createServer(app);
}