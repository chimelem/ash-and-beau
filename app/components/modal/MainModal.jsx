import PropTypes from 'prop-types';
import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Container from '../container';

const Modal = ({open, setOpen, title, component, maxWidth}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Container maxWidth={maxWidth}>
            <Dialog.Panel className="w-full rounded-xl bg-black">
              {title && (
                <Dialog.Title className="p-5 text-3xl font-bold text-center">
                  {title}
                </Dialog.Title>
              )}
              {component}
            </Dialog.Panel>
          </Container>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.defaultProps = {
  maxWidth: 'max-w-screen-xl',
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  component: PropTypes.node.isRequired,
  title: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default Modal;
