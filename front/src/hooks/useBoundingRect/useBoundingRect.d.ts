type inexactNumber = number | undefined | null;

type UseBoundingRectDimensions = {
  x: inexactNumber;
  y: inexactNumber;
  width: inexactNumber;
  height: inexactNumber;
  top: inexactNumber;
  right: inexactNumber;
  bottom: inexactNumber;
  left: inexactNumber;
};

type UseBoundingRect = (
  initialValue: Partial<UseBoundingRectDimensions> | undefined | null,
) => [UseBoundingRectDimensions, { current: HTMLDivElement | null | undefined }];
