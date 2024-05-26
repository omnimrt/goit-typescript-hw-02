import toast from "react-hot-toast";

export const showError = (error) => {
  toast.error(error, {
    duration: 4000,
    position: "top-center",
  });
};
