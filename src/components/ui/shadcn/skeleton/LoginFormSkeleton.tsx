import { Skeleton } from "@/components/ui/shadcn/skeleton/skeleton.tsx";

export const LoginFormSkeleton = () => {
    return (
        <div>
            <div>
                <Skeleton className=" bg-white flex mb-10 flex-col gap-6 w-[19rem] p-1">
                    <Skeleton className="bg-zinc-300 h-3 self-start w-[4rem]" />

                </Skeleton>
                <Skeleton className=" bg-white flex mt-10 flex-col gap-6 w-[19rem] p-1">
                    <Skeleton className="bg-zinc-300 h-12 self-center w-full" />
                    <Skeleton className="bg-zinc-300 h-12 self-center w-full" />
                    <Skeleton className="bg-zinc-300 h-12 self-center w-full" />
                </Skeleton>
            </div>
        </div>
    )
}
