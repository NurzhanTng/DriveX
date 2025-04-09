"use client";

import React from "react";
import { cn, formatDateTime } from "@/lib/utils";
import { useParams } from "next/navigation";

const FormattedDateTime = ({
  date,
  className,
}: {
  date: string;
  className?: string;
}) => {
  const params = useParams();

  return (
    <p className={cn("body-1 text-light-200", className)}>
      {formatDateTime(date, params.locale as string)}
    </p>
  );
};

export default FormattedDateTime;
