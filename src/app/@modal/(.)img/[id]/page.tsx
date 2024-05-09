import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import Image from "next/image";
import { FullPageImageView } from "~/common/full-page-image-view";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}