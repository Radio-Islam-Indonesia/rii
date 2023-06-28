import dayjs from "dayjs";
import { Link } from "@remix-run/react";
import { BiCircle } from "react-icons/bi";

export type ArticleItemProps = {
  title: string;
  content: string;
  isFullContent: boolean;
  createdAt: string;
  readDuration: number;
  imageUrl?: string;
  category: {
    name: string;
    categoryUrl: string;
  };
  author: {
    name: string;
    logoUrl: string;
  };
  detailUrl: string;
};

export function ArticleItem(props: ArticleItemProps) {
  const titleDescription = (
    <>
      <h1
        className="text-xl md:text-2xl font-bold line-clamp-2 capitalize"
        dangerouslySetInnerHTML={{ __html: props.title.toLowerCase() }}
      />
      <div
        className={`prose ${!props.isFullContent ? "line-clamp-3" : ""}`}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </>
  );
  const createdAt = dayjs(props.createdAt).format("DD MMM YYYY");
  return (
    <div className="border-b border-b-base-300 mb-8 pb-8">
      <div className="flex flex-row gap-1 mb-2 items-center">
        <img
          src={props.author.logoUrl}
          alt={props.author.name}
          width={16}
          height={16}
          className="object-contain"
        />
        <span className="text-sm">{props.author.name}</span>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1 justify-between">
          {!props.isFullContent ? (
            <Link to={props.detailUrl} className="gap-1 flex flex-col">
              {titleDescription}
            </Link>
          ) : (
            <div className="gap-1 flex flex-col">{titleDescription}</div>
          )}
          <div className="flex flex-row gap-2 mt-1 items-center">
            <span className="text-gray-600 text-sm">{createdAt}</span>
            <BiCircle size={6} className="text-gray-600" />
            <span className="text-gray-600 text-sm">
              baca {Math.ceil(props.readDuration)} menit
            </span>
            <BiCircle size={6} className="text-gray-600 hidden sm:block" />
            <Link to={props.category.categoryUrl} className="hidden sm:block">
              <span className="badge badge-secondary line-clamp-1 text-white">
                {props.category.name}
              </span>
            </Link>
          </div>
        </div>
        {props.imageUrl ? (
          <img
            src={props.imageUrl}
            alt={props.title}
            className="w-24 h-16 self-center sm:w-48 sm:h-36 object-cover"
          />
        ) : null}
      </div>
    </div>
  );
}

export function ArticleItemLoading() {
  const titleDescription = (
    <>
      <div>
        <div className="w-full h-7 bg-base-300 animate-pulse mb-2 " />
        <div className="w-1/3 h-7 bg-base-300 animate-pulse " />
      </div>
      <div>
        <div className={"bg-base-300 animate-pulse w-full h-5 mt-2"} />
        <div className={"bg-base-300 animate-pulse w-full h-5 mt-2"} />
        <div className={"bg-base-300 animate-pulse w-1/2 h-5 mt-2"} />
      </div>
    </>
  );
  return (
    <div className="border-b border-b-base-300 mb-8 pb-8">
      <div className="flex flex-row gap-1 mb-2 items-center">
        <div className="w-4 h-4 bg-base-300 animate-pulse" />
        <span className="text-sm bg-base-300 animate-pulse w-24 h-5" />
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1 justify-between">
          <div className="gap-1 flex flex-col">{titleDescription}</div>
          <div className="flex flex-row gap-2 mt-1 items-center">
            <span className="w-24 h-4 bg-base-300 animate-pulse" />
            <BiCircle size={6} className="text-gray-600" />
            <span className="w-24 h-4 bg-base-300 animate-pulse" />
            <BiCircle size={6} className="text-gray-600 hidden sm:block" />
            <div className="hidden sm:block">
              <span className="badge badge-secondary line-clamp-1 text-white w-24"></span>
            </div>
          </div>
        </div>
        <div className="w-24 h-16 self-center sm:w-48 sm:h-36 bg-base-300 animate-pulse" />
      </div>
    </div>
  );
}

export function ArticleItemSmall(
  props: Omit<
    ArticleItemProps,
    "content" | "isFullContent" | "createdAt" | "sourceLink"
  >
) {
  return (
    <div className="border-b border-b-base-300 mb-2 pb-2">
      <div className="flex flex-row gap-1 mb-2 items-center">
        <img
          src={props.author.logoUrl}
          alt={props.author.name}
          width={16}
          height={16}
          className="object-contain"
        />
        <span className="text-sm">{props.author.name}</span>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1 justify-between">
          <Link to={props.detailUrl} className="gap-1 flex flex-col">
            <h1
              className="text-md font-bold line-clamp-2 capitalize"
              dangerouslySetInnerHTML={{ __html: props.title.toLowerCase() }}
            />
          </Link>
          <div className="flex flex-row gap-2 mt-1 items-center">
            <span className="text-gray-600 text-sm">
              baca {Math.ceil(props.readDuration)} menit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArticleItemSmallLoading() {
  return (
    <div className="border-b border-b-base-300 mb-2 pb-2">
      <div className="flex flex-row gap-1 mb-2 items-center">
        <div className="w-4 h-4 bg-base-300 animate-pulse" />
        <span className="text-sm bg-base-300 animate-pulse w-24 h-5" />
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <div className="text-md font-bold w-full h-5 bg-base-300 animate-pulse mb-1" />
            <div className="text-md font-bold w-1/2 h-5 bg-base-300 animate-pulse" />
          </div>
          <div className="flex flex-row gap-2 mt-1 items-center">
            <span className="text-sm bg-base-300 animate-pulse w-24 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArticleDetail(
  props: { sourceLink: string } & Omit<ArticleItemProps, "isFullContent">
) {
  const createdAt = dayjs(props.createdAt).format("DD MMM YYYY");
  return (
    <div>
      <div className="flex flex-row gap-2 mb-2">
        <img
          src={props.author.logoUrl}
          alt={props.author.name}
          width={24}
          height={24}
        />
        <span className="text-md">{props.author.name}</span>
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <div className="flex flex-col flex-1 justify-between gap-8">
          <div className="gap-4 flex flex-col">
            <h1
              className="text-xl md:text-4xl font-bold capitalize"
              dangerouslySetInnerHTML={{ __html: props.title.toLowerCase() }}
            />
            <div className="flex flex-row gap-2 mt-1 items-center">
              <span className="text-gray-600 text-sm">{createdAt}</span>
              <BiCircle size={6} className="text-gray-600" />
              <span className="text-gray-600 text-sm">
                baca {Math.ceil(props.readDuration)} menit
              </span>
              <BiCircle size={6} className="text-gray-600 hidden sm:block" />
              <Link to={props.category.categoryUrl}>
                <span className="badge badge-secondary line-clamp-1 text-white">
                  {props.category.name}
                </span>
              </Link>
            </div>
            {props.imageUrl ? (
              <div>
                <img
                  src={props.imageUrl}
                  alt={props.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            ) : null}
            <div
              className={"prose prose-pre:whitespace-pre-wrap"}
              dangerouslySetInnerHTML={{ __html: props.content }}
            />
          </div>
          {props.sourceLink ? (
            <div className="alert alert-warning">
              <div>Sumber Tulisan:</div>
              <a href={props.sourceLink} target="_blank" rel="noreferrer">
                {props.sourceLink}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}