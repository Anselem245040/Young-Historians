import type { ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { COMMUNITY_JOIN_URL } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type JoinCommunityButtonProps = VariantProps<typeof buttonVariants> & {
  label?: string;
  className?: string;
  children?: ReactNode;
};

export function JoinCommunityButton({
  label = "Join Community",
  className,
  variant = "default",
  size = "default",
  children,
}: JoinCommunityButtonProps) {
  return (
    <Link
      href={COMMUNITY_JOIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children ?? label}
    </Link>
  );
}
