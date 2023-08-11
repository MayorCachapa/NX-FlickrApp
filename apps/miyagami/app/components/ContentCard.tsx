import type { FeedItem } from '@miyagami/shared-types';
import Image from 'next/image';
import Link from 'next/link';

export default function ContentCard({
  title,
  link,
  author,
  media,
  tags,
  author_id,
}: FeedItem) {
  return (
    <div className="bg-slate-100 max-w-[300px] rounded overflow-hidden shadow-lg hover:drop-shadow-[10px_8px_0_rgba(29,40,58,0.2)] ease-in-out duration-100">
      <div className="ImageWrapper">
        <Link href={link}>
          <Image className="w-full" src={media.m} fill priority alt={title} />
        </Link>
      </div>
      <div className="px-6 py-4">
        <Link href={link} target="_blank" className="font-bold text-xl mb-2 text-slate-700">
          {title.length > 30
            ? `${title.substring(0, 30)}...`
            : title.length > 0 && title !== " "
            ? title
            : 'Untitled'}
        </Link>
        <p className="text-emerald-700 text-base text-sm mt-3">
          {tags.length > 50 ? `${tags.substring(0, 50)}...` : tags}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          href={`https://www.flickr.com/people/${author_id}`}
          target="_blank"
        >
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {author.replace('nobody@flickr.com ("', '').replace('")', '')}
          </span>
        </Link>
      </div>
    </div>
  );
}
