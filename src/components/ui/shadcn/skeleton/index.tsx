/*
 * -----------------------------------------------------------------------------
 *  File:         Footer.tsx
 *  Description:  Exportation, of the Skeleton as variation for the application.
 *
 *  Author:       Matteo Fresta
 *  Copyright:    Copyright (c) 2025 Matteo Fresta. All rights reserved.
 * -----------------------------------------------------------------------------
 */

import { LoginFormSkeleton } from "@/components/ui/shadcn/skeleton/LoginFormSkeleton.tsx";

const skeletonVariants = {
  Login: <LoginFormSkeleton />,
};

type SkeletonVariant = keyof typeof skeletonVariants;

export const LoadingSkeleton = ({ variant }: { variant: SkeletonVariant }) => {
  return skeletonVariants[variant] || null;
};
