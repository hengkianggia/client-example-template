"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  className,
  text,
}: {
  className?: string;
  text?: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button className={cn(className)} type="submit" disabled={pending}>
      {text}
    </Button>
  );
};

export default SubmitButton;
