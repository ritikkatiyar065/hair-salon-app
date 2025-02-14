import { BookingForm } from "@/components/booking-form";

export default function Book() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">
          Book an Appointment
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Ready for a new look? Book your appointment with our expert stylists
        </p>
        <BookingForm />
      </div>
    </div>
  );
}
