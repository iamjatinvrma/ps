import React from "react";

export const ShippingPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-amber-900 mb-8">
        Shipping Policy
      </h2>
      <p className="text-amber-800 mb-4">
        We offer free shipping on orders over $50. For orders below $50, a flat
        shipping fee of $5.99 will be applied.
      </p>
      <p className="text-amber-800 mb-4">
        Orders are processed within 1-2 business days. Delivery times may vary
        depending on your location, but typically range from 3-7 business days.
      </p>
      <p className="text-amber-800">
        If you have any questions about our shipping policy, please contact us
        at info@paramprikswad.com.
      </p>
    </div>
  );
};
