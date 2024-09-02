export const PAYMENT_HISTORY_DATA = {
  title: "Payment History",
  buttonLabel: "Make Payment",
  tableHeaders: [
    "Course Title",
    "Course Fee",
    "Amount Paid",
    "Payment Balance",
    "Payment Mode",
    "Payment Status",
  ],
  paymentRecords: [
    {
      courseTitle: "Frontend Engineering",
      courseFee: "N 30,000",
      amountPaid: "N 15,000",
      paymentBalance: "N 0",
      paymentMode: "Bank Transfer",
      paymentStatus: "Payment Complete",
    },
    {
      courseTitle: "Frontend Engineering",
      courseFee: "N 30,000",
      amountPaid: "N 15,000",
      paymentBalance: "N 15,000",
      paymentMode: "Bank Transfer",
      paymentStatus: "Incomplete",
    },
    {
      courseTitle: "Frontend Engineering",
      courseFee: "N 30,000",
      amountPaid: "N 15,000",
      paymentBalance: "N 15,000",
      paymentMode: "Bank Transfer",
      paymentStatus: "Incomplete",
    },
  ],
};



export const PAYMENT_TEXT = {
  breadcrumb: "Go Back",
  title: "Payment Details",
  instructions: "Please make your payments via any of the methods below and click on I have sent it to confirm your payment.",
  paymentMethods: [
    {
      method: "Paystack",
      description: "Online payment via paystack",
      buttonLabel: "Proceed To Pay",
    },
    {
      sectionTitle: "Local Transfers",
      bankName: "Zenith Bank",
      accountName: "Gurugeeks Royalty",
      accountNumber: "00000000",
      buttonLabel: "I Have Sent It",
    },
    {
      sectionTitle: "Foreign Transfers",
      bankName: "HSBC",
      accountName: "Gurugeeks Royalty",
      accountNumber: "00000000",
      routingCode: "00000000",
      buttonLabel: "I Have Sent It",
    },
  ],
};
