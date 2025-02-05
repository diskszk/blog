import { Flex, Skeleton } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { fetchZennEntries } from "@/remote";
import { ZennEntriy } from "@/components";
import { queryClient } from "@/store";

export const OtherEntries: React.FC = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ["zennEntries"], queryFn: fetchZennEntries }, queryClient);

  if (error) {
    return <div>{error.message}</div>;
  }

  const entries = data?.isOk() ? data.value : [];

  return (
    <Skeleton
      height="80px"
      loading={isLoading}
    >
      <Flex
        asChild
        direction="column"
        gapY="8px"
      >
        <ul>
          {entries.map((entry) => (
            <ZennEntriy
              entry={entry}
              key={entry.slug}
            />
          ))}
        </ul>
      </Flex>
    </Skeleton>
  );
};
