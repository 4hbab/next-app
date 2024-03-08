interface Props {
  params: { id: number; photoId: number };
}

const PhotoDetail = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      Photo Page {String(id)} {photoId}
    </div>
  );
};

export default PhotoDetail;
