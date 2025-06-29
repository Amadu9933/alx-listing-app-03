import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
    const bookingDetails = {
        propertyName: "Villa Arrecife Beach House",
        price: 7500,
        bookingFee: 65,
        totalNights: 3,
        startDate: "24 August 2024",
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
                        <p className="text-gray-600">Please fill in your details to confirm your reservation</p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="order-2 lg:order-1">
                            <BookingForm />
                            <CancellationPolicy />
                        </div>
                        <div className="order-1 lg:order-2">
                            <OrderSummary bookingDetails={bookingDetails} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
