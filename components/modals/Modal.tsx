function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl w-full rounded-xl grid gap-4 bg-neutral-900 p-10">
      {children}
    </div>
  );
}

export default Modal;
