import {LoginFormSkeleton} from "@/components/ui/shadcn/skeleton/LoginFormSkeleton.tsx";

const skeletonVariants = {
    Login: <LoginFormSkeleton />
};

type SkeletonVariant = keyof typeof skeletonVariants;

export const LoadingSkeleton = ({ variant }: { variant: SkeletonVariant }) => {
    return skeletonVariants[variant] || null;
};
