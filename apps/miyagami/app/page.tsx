import type { FeedResponse } from '@miyagami/shared-types';
import ContentCard from './components/ContentCard';

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
      <form className='sticky relative w-full flex-between md:flex-center mt-6'>
        <input 
        defaultValue={params.get("tags") ?? undefined} type="search" name="tags" 
        className='block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0'
        />
        <button className='rounded-full border border-slate-800 bg-transparent py-1.5 px-5 text-slate-800 transition-all hover:bg-slate-800 hover:text-slate-50 text-center text-sm font-inter flex items-center justify-center ml-2' >Search</button>
      </form>
      <div className='grid grid-row-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 mb-6'>
        {data.items.map((item, index) => (
          <>
            <ContentCard
              title={item.title}
              link={item.link}
              author={item.author}
              author_id={item.author_id}
              media={item.media}
              tags={item.tags}
            /> 
          </>
        ))}
      </div>
    </div>
  );
}
