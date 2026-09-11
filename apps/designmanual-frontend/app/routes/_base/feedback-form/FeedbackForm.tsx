import { Popover as ChakraPopover } from "@chakra-ui/react";
import {
  CloseOutline24Icon,
  SpeechBubbleOutline24Icon,
  StarsOutline18Icon,
} from "@vygruppen/spor-icon-react";
import {
  Button,
  CardSelect,
  CardSelectContent,
  CardSelectTrigger,
  Field,
  Fieldset,
  FieldsetContent,
  FieldsetLegend,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  TextLink,
} from "@vygruppen/spor-react";
import { IconButton } from "@vygruppen/spor-react";
import { useState } from "react";
import { useLocation } from "react-router";

import { sendCustomEvent } from "~/utils/analytics/metabase";
import { IdeIllustration } from "~/utils/illustrations/ide";

export const FeedbackForm = () => {
  return (
    <CardSelect modal>
      <CardSelectTrigger
        variant="floating"
        withChevron={false}
        icon={<SpeechBubbleOutline24Icon />}
        size={["sm", "md"]}
      >
        Feedback?
      </CardSelectTrigger>
      <CardSelectContent minWidth={["20rem", "25rem"]} position="relative">
        <ChakraPopover.CloseTrigger asChild>
          <IconButton
            aria-label="Close feedback"
            icon={<CloseOutline24Icon />}
            position="absolute"
            top="2"
            right="2"
            size="sm"
            variant="ghost"
          />
        </ChakraPopover.CloseTrigger>
        <FeedbackFormContent />
      </CardSelectContent>
    </CardSelect>
  );
};

const FeedbackFormContent = () => {
  const [feedbackType, setFeedbackType] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [haveSubmitted, setHaveSubmitted] = useState<boolean>(false);

  const location = useLocation();

  const onSubmit = () => {
    sendCustomEvent({
      event: "feedback_submitted",
      properties: {
        feedbackType: feedbackType ?? "",
        feedback,
        path: location.pathname,
      },
    });
    setHaveSubmitted(true);
  };

  const handleWriteAnotherFeedback = () => {
    setFeedbackType(null);
    setFeedback("");
    setHaveSubmitted(false);
  };

  return haveSubmitted === false ? (
    <Fieldset>
      <Stack gap="3" direction="column" padding="2">
        <FieldsetLegend>
          <Stack>
            <Heading as="h3" variant="md" fontWeight="bold">
              What would you like to share?
            </Heading>
          </Stack>
        </FieldsetLegend>
        <FieldsetContent display="flex" gap="3" flexDirection="column">
          <Field gap="1" fontSize="xs">
            <RadioGroup
              aria-label="Feedback type"
              orientation="vertical"
              name="feedback-type"
              value={feedbackType}
              onValueChange={(value) => setFeedbackType(value.value)}
            >
              <Radio value="bug">Bug</Radio>
              <Radio value="feature-request">Feature request</Radio>
              <Radio value="documentation">Feedback on documentation</Radio>
              <Radio value="other">Other</Radio>
            </RadioGroup>
          </Field>
          <Text fontSize="xs">
            <Text color="text.highlight" fontSize="xs" asChild>
              <TextLink
                href="/spor/guides/how-to-contribute"
                display="inline-flex"
                flexDirection="row"
                alignItems="center"
                wordBreak="no-word"
                whiteSpace="nowrap"
              >
                Learn how to contribute to Spor
                <StarsOutline18Icon />
              </TextLink>
            </Text>{" "}
            — or write your feedback below.
          </Text>
          <>
            <Textarea
              label="Your feedback"
              value={feedback}
              height="6rem"
              onChange={(event) => setFeedback(event.target.value)}
              paddingTop="3"
              borderTop="0"
            />
            <Button type="submit" onClick={onSubmit} size={["sm", "md"]}>
              Submit
            </Button>
          </>
        </FieldsetContent>
      </Stack>
    </Fieldset>
  ) : (
    <Flex justifyContent="center" alignItems="center" justifyItems="center">
      <Flex gap="2" direction="column" alignItems="center" paddingY="2">
        <IdeIllustration width={180} height={120} />
        <Stack gap="1" alignItems="center">
          <Heading as="h3" variant="md" fontWeight="bold">
            Thank you!
          </Heading>
          <Text color="text.subtle">Feedback is reviewed once a week.</Text>
        </Stack>

        <Button
          variant="tertiary"
          size={["sm", "md"]}
          onClick={handleWriteAnotherFeedback}
        >
          Write another feedback
        </Button>
      </Flex>
    </Flex>
  );
};
