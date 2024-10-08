import React from "react";
import styled from "styled-components/macro";

const generateSrcSet = (src, extension) => {
  return `${src.replace(".jpg", `.${extension}`)} 1x, ${src.replace(
    ".jpg",
    `@2x.${extension}`
  )} 2x, ${src.replace(".jpg", `@3x.${extension}`)} 3x`;
};

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={generateSrcSet(src, "avif")} />
          <source type="image/jpeg" srcSet={generateSrcSet(src, "jpg")} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>
            <TagWrapper>{tag}</TagWrapper>
          </Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

const TagWrapper = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

export default PhotoGridItem;
