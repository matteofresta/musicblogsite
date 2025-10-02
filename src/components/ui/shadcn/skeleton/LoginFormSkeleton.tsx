import { Skeleton } from "@/components/ui/shadcn/skeleton/skeleton.tsx";

export const LoginFormSkeleton = () => {
    return (
        <div>
            <div className={"p-4 w-full h-full"}>
                <Skeleton className="h-14 self-center bg-backgroundGray justify-left flex pl-4">
                    <Skeleton className="bg-zinc-300 h-3 self-center w-[150px]" />
                </Skeleton>
                <Skeleton className=" bg-white grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 py-8 px-10">
                    <Skeleton className="bg-zinc-300 h-3 self-center w-[250px] max-w-full" />
                    <Skeleton className="bg-zinc-300 h-3 self-center w-[200px] max-w-full" />
                    <Skeleton className="bg-zinc-300 h-3 self-center w-[200px] max-w-full" />
                    <Skeleton className="bg-zinc-300 h-3 self-center w-[220px] max-w-full" />
                    <Skeleton className="bg-zinc-300 h-3 self-center w-[240px] max-w-full" />
                    <Skeleton className="bg-zinc-300 h-3 self-center w-[200px] max-w-full" />
                    <Skeleton className="bg-zinc-300 h-3 self-center w-[290px] max-w-full" />
                    <Skeleton className="bg-zinc-300 h-3 self-center w-[200px] max-w-full" />
                </Skeleton>
            </div>
        </div>
    )
}
