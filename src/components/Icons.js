import React from "react";
import { useCartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { cartWidgetItems } = useCartContext();
  return (
    <div className="relative bg-gray-200 rounded-full p-3">
      <svg
        width="25"
        height="25"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1095 32.3246H16.1118C16.1137 32.3246 16.1156 32.3242 16.1175 32.3242H42.6758C43.3296 32.3242 43.9045 31.8905 44.0842 31.2618L49.9435 10.754C50.0698 10.3119 49.9813 9.83658 49.7047 9.4696C49.4278 9.10263 48.9948 8.88672 48.5352 8.88672H12.7312L11.684 4.17442C11.5349 3.50418 10.9406 3.02734 10.2539 3.02734H1.46484C0.655746 3.02734 0 3.68309 0 4.49219C0 5.30128 0.655746 5.95703 1.46484 5.95703H9.07898C9.26437 6.79207 14.09 28.5076 14.3677 29.7569C12.8109 30.4337 11.7188 31.9859 11.7188 33.7891C11.7188 36.2122 13.6902 38.1836 16.1133 38.1836H42.6758C43.4849 38.1836 44.1406 37.5278 44.1406 36.7188C44.1406 35.9097 43.4849 35.2539 42.6758 35.2539H16.1133C15.3057 35.2539 14.6484 34.5966 14.6484 33.7891C14.6484 32.9826 15.3034 32.3265 16.1095 32.3246V32.3246ZM46.5931 11.8164L41.5707 29.3945H17.2882L13.382 11.8164H46.5931Z"
          fill="black"
        />
        <path
          d="M14.6484 42.5781C14.6484 45.0012 16.6199 46.9727 19.043 46.9727C21.4661 46.9727 23.4375 45.0012 23.4375 42.5781C23.4375 40.155 21.4661 38.1836 19.043 38.1836C16.6199 38.1836 14.6484 40.155 14.6484 42.5781ZM19.043 41.1133C19.8505 41.1133 20.5078 41.7706 20.5078 42.5781C20.5078 43.3857 19.8505 44.043 19.043 44.043C18.2354 44.043 17.5781 43.3857 17.5781 42.5781C17.5781 41.7706 18.2354 41.1133 19.043 41.1133Z"
          fill="black"
        />
        <path
          d="M35.3516 42.5781C35.3516 45.0012 37.323 46.9727 39.7461 46.9727C42.1692 46.9727 44.1406 45.0012 44.1406 42.5781C44.1406 40.155 42.1692 38.1836 39.7461 38.1836C37.323 38.1836 35.3516 40.155 35.3516 42.5781ZM39.7461 41.1133C40.5537 41.1133 41.2109 41.7706 41.2109 42.5781C41.2109 43.3857 40.5537 44.043 39.7461 44.043C38.9385 44.043 38.2812 43.3857 38.2812 42.5781C38.2812 41.7706 38.9385 41.1133 39.7461 41.1133Z"
          fill="black"
        />
      </svg>
      {cartWidgetItems() === 0 ? null : (
        <div className="flex items-center justify-center font-bold absolute top-0 -right-1 h-4 w-4 lg:h-5 lg:w-5 lg:-right-2 rounded-full bg-red-600 text-red-100 text-xs">
          {cartWidgetItems()}
        </div>
      )}
    </div>
  );
};

export const AddIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#5F6368" />
  </svg>
);

export const InfoIcon = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="#5F6368"
    />
  </svg>
);

export const MenuIcon = ({ display }) => {
  return display === "block" ? (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill="#5F6368"
        />
      </svg>
    </div>
  ) : (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition ease-in delay-100"
      >
        <path
          d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
          fill="#5F6368"
        />
      </svg>
    </div>
  );
};

export const RemoveItem = () => (
  <button>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-4 h-8 w-8"
    >
      <path
        d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="#CC5F58"
      />
    </svg>
  </button>
);
