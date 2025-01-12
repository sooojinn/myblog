export const MdxComponents = {
  code: (props: any) => {
    return (
      <code {...props} className="before:content-none after:content-none">
        {props.children}
      </code>
    );
  },
};
