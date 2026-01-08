import { useEffect } from 'react';

function useOutsideClickHandler(ref, setDisableButton, setShow, isOpen) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (isOpen) {
          setShow(false);
          setTimeout(() => { setDisableButton(false) }, 100);
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setDisableButton, setShow, isOpen]);
}

export default useOutsideClickHandler;