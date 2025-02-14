import { ScrollArea } from "@/components/ui/scroll-area";

const hours = [
  { day: "Monday", hours: "9:00 AM - 7:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 7:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 7:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 7:00 PM" },
  { day: "Friday", hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export default function BusinessHours() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        Business Hours
      </h3>
      <ScrollArea className="mt-4 h-[130px]">
        <div className="space-y-2">
          {hours.map((schedule) => (
            <div
              key={schedule.day}
              className="flex justify-between items-center text-sm"
            >
              <span className="text-gray-600 font-medium">{schedule.day}</span>
              <span className="text-gray-500">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
