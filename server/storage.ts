import { 
    type Service, type InsertService,
    type Booking, type InsertBooking,
    type BusinessHours, type InsertBusinessHours,
    services, bookings, businessHours
  } from "@shared/schema";
  import { db } from "./db";
  import { eq } from "drizzle-orm";
  
  export interface IStorage {
    // Services
    getServices(): Promise<Service[]>;
    getServiceById(id: number): Promise<Service | undefined>;
    createService(service: InsertService): Promise<Service>;
  
    // Bookings
    createBooking(booking: InsertBooking): Promise<Booking>;
    getBookings(): Promise<Booking[]>;
  
    // Business Hours
    getBusinessHours(): Promise<BusinessHours[]>;
    setBusinessHours(hours: InsertBusinessHours): Promise<BusinessHours>;
  }
  
  export class DatabaseStorage implements IStorage {
    async getServices(): Promise<Service[]> {
      return await db.select().from(services);
    }
  
    async getServiceById(id: number): Promise<Service | undefined> {
      const [service] = await db.select().from(services).where(eq(services.id, id));
      return service;
    }
  
    async createService(insertService: InsertService): Promise<Service> {
      const [service] = await db.insert(services).values(insertService).returning();
      return service;
    }
  
    async createBooking(insertBooking: InsertBooking): Promise<Booking> {
      const [booking] = await db.insert(bookings).values(insertBooking).returning();
      return booking;
    }
  
    async getBookings(): Promise<Booking[]> {
      return await db.select().from(bookings);
    }
  
    async getBusinessHours(): Promise<BusinessHours[]> {
      return await db.select().from(businessHours);
    }
  
    async setBusinessHours(insertHours: InsertBusinessHours): Promise<BusinessHours> {
      const [hours] = await db.insert(businessHours).values(insertHours).returning();
      return hours;
    }
  }
  
  // Initial services to be inserted after database setup
  const initialServices: InsertService[] = [
    {
      name: "Women's Haircut",
      description: "Professional haircut including consultation, wash, and style",
      price: "65.00",
      duration: 60,
      category: "haircut"
    },
    {
      name: "Men's Haircut",
      description: "Classic haircut with modern styling",
      price: "45.00",
      duration: 45,
      category: "haircut"
    },
    {
      name: "Color & Highlights",
      description: "Full color or highlights with professional consultation",
      price: "120.00",
      duration: 120,
      category: "color"
    }
  ];
  
  export const storage = new DatabaseStorage();
  
  // Initialize services
  async function initializeServices() {
    const existingServices = await storage.getServices();
    if (existingServices.length === 0) {
      for (const service of initialServices) {
        await storage.createService(service);
      }
    }
  }
  
  // Call initialization
  initializeServices().catch(console.error);