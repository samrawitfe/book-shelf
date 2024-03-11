import { BookDetailProps } from "@/app/common/type";
import BookDetailsModal from "@/app/components/BookDetailsModal";
import React from "react";

const BookDetails = async ({ params }: BookDetailProps) => {
  return <BookDetailsModal bookId={params.bookId} showAdminControls={true} />;
};

export default BookDetails;
