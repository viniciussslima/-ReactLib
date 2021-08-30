declare module "viniciussslima" {
  export interface DrawerProps {
    open: boolean;
    onClose: React.MouseEventHandler<HTMLImageElement>;
    containerStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    closeButton?: boolean;
    closeIcon?: string;
    closeIconStyle?: CSSProperties;
    children: ReactNode;
  }

  /**
   *
   * @param open boolean
   * @param onClose React.MouseEventHandler<HTMLImageElement>
   * @param containerStyle (optional) CSSProperties
   * @param contentStyle (optional) CSSProperties
   * @param closeButton (optional) boolean
   * @param closeIcon (optional) Image src
   * @param closeIconStyle (optional) CSSProperties
   * @param children ReactNode
   *
   **/

  export const Drawer: React.FC<DrawerProps>;

  export interface LoadingProps {
    isLoading: boolean;
    color?: string;
  }

  /**
   *
   * @param isLoading  (optional) boolean
   * @param color string
   *
   **/

  export const Loading: React.FC<LoadingProps>;

  export interface ModalProps {
    open: boolean;
    onClose: MouseEventHandler<HTMLElement>;
    containerStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    closeButton?: boolean;
    closeIcon?: string;
    closeIconStyle?: CSSProperties;
    title: string;
    titleStyle?: CSSProperties;
    setResponse: (value: boolean) => void;
    cancelButtonStyle?: CSSProperties;
    okButtonStyle?: CSSProperties;
    disableBackdropClick?: boolean;
    children: ReactNode;
  }

  /**
   *
   * @param open boolean
   * @param onclose () => void
   * @param containerStyle (optional) CSSProperties
   * @param closeButton (optional) boolean
   * @param closeIcon (optional) Image src
   * @param closeIconStyle (optional) CSSProperties
   * @param title string
   * @param titleStyle (optional) CSSProperties
   * @param setResponse (value: boolean) => void
   * @param cancelButtonStyle (optional) CSSProperties
   * @param okButtonStyle (optional) CSSProperties
   * @param disableBackdropClick (optional) boolean
   * @param children ReactNode
   *
   **/

  export const Modal: React.FC<ModalProps>;

  export interface CarrosselProps {
    height: number;
    itemWidth: number;
    qty: number;
    space?: number;
    timeout?: number;
    children: ReactNode | Array<ReactNode>;
  }

  /**
   *
   * @param height number
   * @param itemWidth number
   * @param qty number
   * @param space (optional) number
   * @param timeout (optional) number
   * @param children CarrosselItem
   *
   **/

  export const Carrossel: React.FC<CarrosselProps>;

  export interface CarrosselItemProps {
    style?: CSSProperties;
    children: ReactNode;
  }

  /**
   *
   * @param style (optional) CSSProperties
   * @param children ReactNode
   *
   **/

  export const CarrosselItem: React.FC<CarrosselItemProps>;

  export interface SwitchProps {
    check: boolean;
    onChange: (value: boolean) => void;
    text?: string;
    checkColor?: string;
    unCheckColor?: string;
  }

  /**
   *
   * @param check boolean
   * @param onChange (value: boolean) => void
   * @param text (optional) string
   * @param checkColor (optional) color
   * @param unCheckColor (optional) color
   *
   **/

  export const Switch: React.FC<SwitchProps>;

  export interface ToastProps {
    show: boolean;
    onHide: () => void;
    text: string;
    type: string;
    time?: number;
  }

  /**
   *
   * @param show boolean
   * @param onHide () => void
   * @param text string
   * @param type string
   * @param time (optional) number
   *
   **/

  export const Toast: React.FC<ToastProps>;

  export interface MenuProps {
    show: boolean;
    onHide: () => void;
    anchor: HTMLElement | null;
    children: ReactNode | Array<ReactNode>;
  }

  /**
   * @param show boolean
   * @param onHide () => void
   * @param anchor HTMLElement | null
   * @param children MenuItem
   *
   **/

  export const Menu: React.FC<MenuProps>;

  export interface ItemProps {
    children: string;
    onClick?: () => void;
  }

  export interface MenuItemProps extends ItemProps {
    onClick: () => void;
  }

  /**
   *
   * @param children ReactNode
   * @param onClick () => void
   *
   **/

  export const MenuItem: React.FC<MenuItemProps>;

  export interface TooltipProps {
    message: string;
    children: ReactNode;
  }

  /**
   * @param message string
   * @params children ReactNode
   *
   **/

  export const Tooltip: React.FC<TooltipProps>;

  export interface ListProps {
    title?: string;
    collapsible?: boolean;
    initOpen?: boolean;
    children: ReactNode | Array<ReactNode>;
  }

  /**
   * @param title (optional) string
   * @param collapseable (optional) boolean
   * @param initOpen (optional) boolean
   * @param children ListItem
   *
   **/

  export const List: React.FC<ListProps>;

  export interface ListItemProps extends ItemProps {}

  /**
   *
   * @param children ReactNode
   * @param onClick (optional) () => void
   *
   **/

  export const ListItem: React.FC<ListItemProps>;

  export interface NavbarProps {
    style?: CSSProperties;
    children?: ReactNode | Array<ReactNode>;
  }

  /**
   *
   * @param style (optional) CSSProperties
   * @param children (optional) ReactNode
   *
   **/

  export const Navbar: React.FC<NavbarProps>;

  export interface PaginatorProps {
    pages: number;
    changePage: (newPage: number) => void;
    currentPage: number;
  }

  /**
   *
   * @param pages number
   * @param changePage (newPage: number) => void
   * @param currentPage number
   *
   **/

  export const Paginator: React.FC<PaginatorProps>;
}
