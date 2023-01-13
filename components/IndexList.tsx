/** @jsxImportSource https://esm.sh/preact */

import { Page } from "../types.d.ts";

const ArrowRightIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
      </path>
    </svg>
  );
};

const ArrowLeftIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
      </path>
    </svg>
  );
};

const StarIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
      </path>
    </svg>
  );
};

interface PageItemProps {
  url: URL;
  title: string;
  description?: string;
  pinned?: boolean;
  isDirIndex?: boolean;
  date?: Date;
  lang?: Intl.LocalesArgument;
  icon?: preact.VNode;
}

function PageItem({
  title,
  description,
  url,
  pinned,
  isDirIndex,
  date,
  lang,
  icon,
}: PageItemProps) {
  const dateFormat: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    day: "2-digit",
    month: "short",
  };

  return (
    <li>
      <a
        href={url.pathname}
        class="
          box
          px-2 py-1.5
          flex flex-row items-center gap-2
          ring-offset-4 ring-offset-neutral-3
        "
      >
        {pinned && <StarIcon />}

        <div class="divide-dot flex-1 flex overflow-hidden whitespace-nowrap">
          <span class="flex-shrink-0 font-semibold truncate">
            {title}
            {isDirIndex && (
              <span class="ml-0.5 text-neutral-9 select-none">/..</span>
            )}
          </span>
          {description && (
            <span class="truncate text-neutral-10">
              {description}
            </span>
          )}
        </div>

        {date && (
          <time
            class="text-neutral-10 text(xs) tabular-nums slashed-zero flex-shrink-0"
            dateTime={date.toString()}
          >
            {date.toLocaleDateString(lang, dateFormat)}
          </time>
        )}
        <div class="text-neutral-9 flex-shrink-0">{icon}</div>
      </a>
    </li>
  );
}

interface TagItemProps {
  name: string;
  pageCount: number;
}

function TagItem({ name, pageCount }: TagItemProps) {
  return (
    <li>
      <a
        href={`/tags##${name}`}
        class="box px-2 py-0.5"
      >
        {name} <span class="text-neutral-9">{pageCount}</span>
      </a>
    </li>
  );
}

interface IndexListProps {
  title: string;
  items: Page[] | Record<string, Page[]>;
  type: "pages" | "tags" | "backlinks";
  lang: Intl.LocalesArgument;
}

export default function IndexList(props: IndexListProps) {
  return (
    <section
      id={props.title}
      class="
        text(sm)
        target:(
          ring ring-accent-9 ring-offset-8 ring-offset-accent-3
          bg-accent-3
        )
      "
    >
      <h6 class="text(xs neutral-10) uppercase font-semibold tracking-wide mb-3">
        {props.title}
      </h6>
      {(props.type === "pages" || props.type === "backlinks") &&
        Array.isArray(props.items) &&
        (
          <ul class="flex flex-col gap-1.5">
            {props.items.map((item) => (
              <PageItem
                title={item.title || ""}
                description={item.description}
                url={item.url}
                isDirIndex={item.index === "dir"}
                pinned={item.pinned}
                date={item.datePublished}
                lang={props.lang}
                icon={props.type === "backlinks"
                  ? <ArrowLeftIcon />
                  : <ArrowRightIcon />}
              />
            ))}
          </ul>
        )}
      {props.type === "tags" && (
        <ul class="flex flex-wrap gap-1.5">
          {Object.entries(props.items).map((item) => (
            <TagItem name={item[0]} pageCount={item[1].length} />
          ))}
        </ul>
      )}
    </section>
  );
}
