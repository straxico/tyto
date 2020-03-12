type FormFeedbackType = 'help' | 'error';

type FormFeedbackProps = Globals & {
  children: React$Node;
  type?: FormFeedbackType;
};
