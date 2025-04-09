import React from "react";
import Sort from "@/components/Sort";
import { getFiles, getUniqueSpaceUsed } from "@/lib/actions/file.actions";
import Card from "@/components/Card";
import { convertFileSize, getFileTypesParams } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { Models } from "node-appwrite";

const Page = async ({ searchParams, params }: SearchParamProps) => {
  const t = await getTranslations("FilePages");
  const type = ((await params)?.type as string) || "";
  const locale = ((await params)?.locale as string) || "";
  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  const types = getFileTypesParams(type) as FileType[];

  const files = await getFiles({ types, searchText, sort });
  const usedSpace = await getUniqueSpaceUsed(types[0]);

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{t(type)}</h1>

        <div className="total-size-section">
          <p className="body-1">
            {t("total")}
            <span className="h5">
              {convertFileSize(usedSpace.size, locale) || 0}
            </span>
          </p>

          <div className="sort-constainter">
            <p className="body-1 text-light-200 hidden sm:block"></p>

            <Sort />
          </div>
        </div>
      </section>

      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} {...file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
};

export default Page;
