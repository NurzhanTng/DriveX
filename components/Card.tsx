"use client";

import React from "react";
import { Models } from "node-appwrite";
import { Link } from "@/navigation";
import Thumbnail from "@/components/Thumbnail";
import { convertFileSize } from "@/lib/utils";
import FormattedDateTime from "@/components/FormattedDateTime";
import ActionDropdown from "@/components/ActionDropdown";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const Card = ({ file }: Models.Document) => {
  const t = useTranslations("FilePages");
  const params = useParams();

  return (
    <Link href={file.url} target="_blank" className="file-card">
      <div className="flex justify-between">
        <Thumbnail
          type={file.type}
          extension={file.extension}
          url={file.url}
          className="!size-20"
          imageClassName="!size-11"
        />

        <div className="flex flex-col items-end justify-between">
          <ActionDropdown file={file} />

          <p className="body-1">
            {convertFileSize(file.size, params.locale as string)}
          </p>
        </div>
      </div>

      <div className="file-cart-details">
        <p className="subtitle-2 line-clamp-1">{file.name}</p>

        <FormattedDateTime
          date={file.$createdAt}
          className="body-2 text-light-100"
        />

        <p className="caption text-light-200 line-clamp-1">
          {t("by")}
          {file.ownerId.fullName}
        </p>
      </div>
    </Link>
  );
};

export default Card;
