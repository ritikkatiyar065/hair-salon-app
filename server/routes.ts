import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertServiceSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  // Get all services
  app.get("/api/services", async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Get service by ID
  app.get("/api/services/:id", async (req, res) => {
    const service = await storage.getServiceById(Number(req.params.id));
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });

  // Create booking
  app.post("/api/bookings", async (req, res) => {
    try {
      const booking = insertBookingSchema.parse(req.body);
      const created = await storage.createBooking(booking);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ message: "Invalid booking data" });
    }
  });

  // Get business hours
  app.get("/api/business-hours", async (_req, res) => {
    const hours = await storage.getBusinessHours();
    res.json(hours);
  });

  const httpServer = createServer(app);
  return httpServer;
}
