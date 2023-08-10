import type { FeedResponse } from '@miyagami/shared-types';
import Image from 'next/image';

export default async function Index({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Define params
  const params = new URLSearchParams();
  // If type is different from undefined:
  if (typeof searchParams.tags === 'string') {
    // Format the tags and append them to params
    params.append("tags", searchParams.tags)
  }

  // 
  const response = await fetch(`http://localhost:3333/api?${params.toString()}`);

  if (!response.ok) {
    return (
      <div>
        <h3>Something went wrong!</h3>
      </div>
    );
  }

  const data: FeedResponse = await response.json();

  return (
    <div className="flex flex-col justify-center items-center">
      <form>
        <input defaultValue={params.get("tags") ?? undefined} type="search" name="tags" />
        <button>Search</button>
      </form>
      <ul className='grid grid-cols-3 gap-5'>
        {data.items.map((item, index) => (
          <li key={index} className=''>
            <Image
              src={item.media.m}
              alt={item.title}
              width={120}
              height={120}
              className='object-fit'
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
