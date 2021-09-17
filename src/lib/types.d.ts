declare module "viniciussslima" {
  export interface CarrosselProps {
    height: number;
    itemWidth: number;
    qty: number;
    children: ReactNode | ReactNodeArray;
    space?: number;
    timeout?: number;
  }

  /**
   *
   * @param height number
   * @param itemWidth number
   * @param qty number
   * @param children React.ReactNode | React.ReactNodeArray
   * @param space (optional) number
   * @param timeout (optional) number, default: 0
   *
   **/

  export const Carrossel: React.FC<CarrosselProps>;

  export interface CarrosselItemProps {
    children: ReactNode;
    style?: CSSProperties;
  }

  /**
   *
   * @param children React.ReactNode
   * @param style (optional) React.CSSProperties
   *
   **/

  export const CarrosselItem: React.FC<CarrosselItemProps>;

  export interface DrawerProps {
    open: boolean;
    onClose: MouseEventHandler<HTMLElement>;
    containerStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    closeButton?: boolean;
    closeIcon?: string;
    closeIconStyle?: CSSProperties;
    disableBackdropClick?: boolean;
    children: ReactNode;
  }

  /**
   *
   * @param open boolean
   * @param onClose React.MouseEventHandler<HTMLImageElement>
   * @param children React.ReactNode
   * @param containerStyle (optional) React.CSSProperties
   * @param contentStyle (optional) React.CSSProperties
   * @param closeButton (optional) boolean
   * @param closeIcon (optional) string
   * @param closeIconStyle (optional) React.CSSProperties
   * @param disableBackdropClick (optional) boolean
   *
   **/

  export const Drawer: React.FC<DrawerProps>;

  export interface ListProps {
    children: ReactNode | ReactNodeArray;
    title?: string;
    collapsible?: boolean;
    initOpen?: boolean;
  }

  /**
   * @param children React.ReactNode | React.ReactNodeArray
   * @param title (optional) string
   * @param collapseable (optional) boolean
   * @param initOpen (optional) boolean
   *
   **/

  export const List: React.FC<ListProps>;

  export interface ListItemProps {
    children: ReactNode;
    onClick?: () => void;
  }

  /**
   *
   * @param children React.ReactNode
   * @param onClick (optional) () => void
   *
   **/

  export const ListItem: React.FC<ListItemProps>;

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

  export interface MenuProps {
    show: boolean;
    onHide: () => void;
    anchor: HTMLElement | null;
    children: ReactNode | ReactNodeArray;
  }

  /**
   * @param show boolean
   * @param onHide () => void
   * @param anchor HTMLElement | null
   * @param children React.ReactNode |  React.ReactNodeArray
   *
   **/

  export const Menu: React.FC<MenuProps>;

  export interface MenuItemProps {
    children: string;
    onClick: () => void;
  }

  /**
   *
   * @param children string
   * @param onClick () => void
   *
   **/

  export const MenuItem: React.FC<MenuItemProps>;

  export interface ModalProps {
    open: boolean;
    onClose: MouseEventHandler<HTMLElement>;
    title: string;
    setResponse: (value: boolean) => void;
    children: ReactNode;
    containerStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    closeButton?: boolean;
    closeIcon?: string;
    closeIconStyle?: CSSProperties;
    titleStyle?: CSSProperties;
    cancelButtonStyle?: CSSProperties;
    okButtonStyle?: CSSProperties;
    disableBackdropClick?: boolean;
  }

  /**
   *
   * @param open boolean
   * @param onclose () => void
   * @param title string
   * @param children React.ReactNode
   * @param setResponse (value: boolean) => void
   * @param containerStyle (optional) React.CSSProperties
   * @param closeButton (optional) boolean
   * @param closeIcon (optional) string
   * @param closeIconStyle (optional) React.CSSProperties
   * @param titleStyle (optional) React.CSSProperties
   * @param cancelButtonStyle (optional) React.CSSProperties
   * @param okButtonStyle (optional) React.CSSProperties
   * @param disableBackdropClick (optional) boolean
   *
   **/

  export const Modal: React.FC<ModalProps>;

  export interface NavbarProps {
    style?: CSSProperties;
    children?: ReactNode | ReactNodeArray;
  }

  /**
   *
   * @param style (optional) React.CSSProperties
   * @param children (optional) React.ReactNode
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
   * @param checkColor (optional) string
   * @param unCheckColor (optional) string
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

  export interface TooltipProps {
    message: string;
    children: ReactNode;
  }

  /**
   * @param message string
   * @params children React.ReactNode
   *
   **/

  export const Tooltip: React.FC<TooltipProps>;
}
