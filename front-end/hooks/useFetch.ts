import useSWR from "swr";

export function useFetch(url: string, options: any) {
    const { data, error, mutate } = useSWR(url, async url => {
        const res = await fetch(url, options);
        return await res.json();
    }); 
    return { data, error, mutate };
}