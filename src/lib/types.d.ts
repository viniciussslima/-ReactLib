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
  export const Drawer: React.FC<DrawerProps>;

  export interface LoadingProps {
    isLoading?: boolean;
    color?: string;
  }

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

  export const Modal: React.FC<ModalProps>;

  export interface CarrosselProps {
    height: number;
    itemWidth: number;
    qty: number;
    space?: number;
    timeout?: number;
    children: ReactNode | Array<ReactNode>;
  }

  export const Carrossel: React.FC<CarrosselProps>;

  export interface CarrosselItemProps {
    style?: CSSProperties;
    children: ReactNode;
  }

  export const CarrosselItem: React.FC<CarrosselItemProps>;

  export interface SwitchProps {
    check: boolean;
    onChange: (value: boolean) => void;
    text?: string;
    checkColor?: string;
    unCheckColor?: string;
  }

  export const Switch: React.FC<SwitchProps>;

  export interface ToastProps {
    show: boolean;
    onHide: () => void;
    text: string;
    type: string;
    time?: number;
  }

  export const Toast: React.FC<ToastProps>;

  export interface MenuProps {
    show: boolean;
    onHide: () => void;
    anchor: HTMLElement | null;
    children: ReactNode | Array<ReactNode>;
  }

  export const Menu: React.FC<MenuProps>;

  export interface ItemProps {
    children: string;
    onClick: () => void;
  }

  export interface MenuItemProps extends ItemProps {}

  export const MenuItem: React.FC<MenuItemProps>;

  export interface TooltipProps {
    message: string;
    children: ReactNode;
  }

  export const Tooltip: React.FC<TooltipProps>;

  export interface ListProps {
    title?: string;
    collapsible?: boolean;
    initOpen?: boolean;
    children: ReactNode | Array<ReactNode>;
  }

  export const List: React.FC<ListProps>;

  export interface ListItemProps extends ItemProps {}

  export const ListItem: React.FC<ListItemProps>;

  export interface NavbarProps {
    style?: CSSProperties;
    children: ReactNode | Array<ReactNode>;
  }

  export const Navbar: React.FC<NavbarProps>;

  export interface PaginatorProps {
    pages: number;
    changePage: (newPage: number) => void;
    currentPage: number;
  }

  export const Paginator: React.FC<PaginatorProps>;
}
