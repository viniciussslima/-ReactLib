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

  export interface LoadingProps {
    isLoading?: boolean;
    color?: string;
  }

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

  export interface CarrosselProps {
    height: number;
    itemWidth: number;
    qty: number;
    space?: number;
    timeout?: number;
    children: ReactNode | Array<ReactNode>;
  }

  export interface CarrosselItemProps {
    style?: CSSProperties;
    children: ReactNode;
  }

  export interface SwitchProps {
    check: boolean;
    onChange: (value: boolean) => void;
    text?: string;
    checkColor?: string;
    unCheckColor?: string;
  }

  export interface ToastProps {
    show: boolean;
    onHide: () => void;
    text: string;
    type: string;
    time?: number;
  }

  export interface MenuProps {
    show: boolean;
    onHide: () => void;
    anchor: HTMLElement | null;
    children: ReactNode | Array<ReactNode>;
  }

  export interface ItemProps {
    children: string;
    onClick: () => void;
  }

  export interface MenuItemProps extends ItemProps {}

  export interface TooltipProps {
    message: string;
    children: ReactNode;
  }

  export interface ListProps {
    title?: string;
    collapsible?: boolean;
    initOpen?: boolean;
    children: ReactNode | Array<ReactNode>;
  }

  export interface ListItemProps extends ItemProps {}

  export interface NavbarProps {
    style?: CSSProperties;
    children: ReactNode | Array<ReactNode>;
  }

  export interface PaginatorProps {
    pages: number;
    changePage: (newPage: number) => void;
    currentPage: number;
  }
}
