type AngleType = number;

export interface IThemeConfig {
  'common.bi.image'?: string;
  'common.bisize.width'?: string;
  'common.bisize.height'?: string;
  'common.backgroundImage'?: string;
  'common.backgroundColor'?: string;
  'common.border'?: string;
  'header.backgroundImage'?: string;
  'header.backgroundColor'?: string;
  'header.border'?: string;
  'loadButton.backgroundColor'?: string;
  'loadButton.border'?: string;
  'loadButton.color'?: string;
  'loadButton.fontFamily'?: string;
  'loadButton.fontSize'?: string;
  'downloadButton.backgroundColor'?: string;
  'downloadButton.border'?: string;
  'downloadButton.color'?: string;
  'downloadButton.fontFamily'?: string;
  'downloadButton.fontSize'?: string;
  'menu.normalIcon.path'?: string;
  'menu.normalIcon.name'?: string;
  'menu.activeIcon.path'?: string;
  'menu.activeIcon.name'?: string;
  'menu.iconSize.width'?: string;
  'menu.iconSize.height'?: string;
  'submenu.backgroundColor'?: string;
  'submenu.partition.color'?: string;
  'submenu.normalIcon.path'?: string;
  'submenu.normalIcon.name'?: string;
  'submenu.activeIcon.path'?: string;
  'submenu.activeIcon.name'?: string;
  'submenu.iconSize.width'?: string;
  'submenu.iconSize.height'?: string;
  'submenu.normalLabel.color'?: string;
  'submenu.normalLabel.fontWeight'?: string;
  'submenu.activeLabel.color'?: string;
  'submenu.activeLabel.fontWeight'?: string;
  'checkbox.border'?: string;
  'checkbox.backgroundColor'?: string;
  'range.pointer.color'?: string;
  'range.bar.color'?: string;
  'range.subbar.color'?: string;
  'range.value.color'?: string;
  'range.value.fontWeight'?: string;
  'range.value.fontSize'?: string;
  'range.value.border'?: string;
  'range.value.backgroundColor'?: string;
  'range.title.color'?: string;
  'range.title.fontWeight'?: string;
  'colorpicker.button.border'?: string;
  'colorpicker.title.color'?: string;
}

export interface IIconInfo {
  [propName: string]: string;
}

export interface IIconOptions {
  fill?: string;
  left?: number;
  top?: number;
}

export interface IShapeOptions {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  width?: number;
  height?: number;
  rx?: number;
  ry?: number;
  left?: number;
  top?: number;
  isRegular?: boolean;
}

export interface IGenerateTextOptions {
  styles?: ITextStyleConfig;
  position?: {
    x: number;
    y: number;
  };
}

export interface ITextStyleConfig {
  fill?: string;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: string;
  textAlign?: string;
  textDecoration?: string;
}

export interface IRectConfig {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface ICanvasSize {
  width: number;
  height: number;
}

export interface IBrushOptions {
  width: number;
  color: string;
}

export interface IPositionConfig {
  x: number;
  y: number;
  originX: string;
  originY: string;
}

export interface IToDataURLOptions {
  format?: string;
  quality?: number;
  multiplier?: number;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

export interface IGraphicObjectProps {
  id?: number;
  type?: string;
  text?: string;
  left?: string | number;
  top?: string | number;
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
  strokeWidth?: string | number;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: string;
  textAlign?: string;
  textDecoration?: string;
  opacity?: number;
  [propName: string]: number | string | boolean | undefined;
}

export interface IIncludeUIOptions {
  loadImage?: {
    path: string;
    name: string;
  };
  theme?: IThemeConfig;
  menu?: string[];
  initMenu?: string;
  uiSize?: {
    width: string;
    height: string;
  };
  menuBarPosition?: string;
  usageStatistics?: boolean;
}

export interface ISelectionStyleConfig {
  cornerStyle?: string;
  cornerSize?: number;
  cornerColor?: string;
  cornerStrokeColor?: string;
  transparentCorners?: boolean;
  lineWidth?: number;
  borderColor?: string;
  rotatingPointOffset?: number;
}

export interface IObjectProps {
  // icon, shape
  fill: string;
  height: number;
  id: number;
  left: number;
  opacity: number;
  stroke: string | null;
  strokeWidth: number | null;
  top: number;
  type: string;
  width: number;
}

export interface ITextObjectProps extends IObjectProps {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  text: string;
  textAlign: string;
  textDecoration: string;
}

export interface IFilterResolveObject {
  type: string;
  action: string;
}

export interface ICropResolveObject {
  oldWidth: number;
  oldHeight: number;
  newWidth: number;
  newHeight: number;
}

export interface IFlipXYResolveObject {
  flipX: boolean;
  flipY: boolean;
  angle: AngleType;
}

export interface IOptions {
  includeUI?: IIncludeUIOptions;
  cssMaxWidth?: number;
  cssMaxHeight?: number;
  usageStatistics?: boolean;
  selectionStyle?: ISelectionStyleConfig;
}

export interface IUIDimension {
  height?: string;
  width?: string;
}

export interface IImageDimension {
  oldHeight?: number;
  oldWidth?: number;
  newHeight?: number;
  newWidth?: number;
}

export interface IEditorSize {
  uiSize?: IUIDimension;
  imageSize?: IImageDimension;
}

export interface UI {
  resizeEditor(dimension: IEditorSize): Promise<void>;
}
