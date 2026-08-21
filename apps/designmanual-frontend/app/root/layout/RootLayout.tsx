import { Flex } from "@chakra-ui/react";
import { SpeechBubbleOutline24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  CardSelect,
  CardSelectContent,
  CardSelectTrigger,
  Field,
  Fieldset,
  FieldsetContent,
  FieldsetLegend,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@vygruppen/spor-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import { LeftSidebar } from "~/routes/_base/left-sidebar/LeftSidebar";
import { sendCustomEvent } from "~/utils/analytics/metabase";
import { sendPageViewEvent } from "~/utils/analytics/metabaseCore";
import { IdeIllustration } from "~/utils/illustrations/ide";

import { Footer } from "./Footer";
import { HeaderOffsetContext } from "./HeaderOffsetContext";
import { SiteHeader } from "./SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
};

function usePageTracking() {
  const location = useLocation();
  useEffect(() => {
    if (typeof document === "undefined") return;

    sendPageViewEvent({
      name: location.pathname,
      recordModelVersion: 1,
    });
  }, [location.pathname]);
}
export const RootLayout = ({ children }: BaseLayoutProps) => {
  const [headerOffset, setHeaderOffset] = useState(110);
  const [feedbackBottom, setFeedbackBottom] = useState(16);
  const footerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isIdentitetPage = location.pathname.includes("identitet");

  useEffect(() => {
    const updateFeedbackPosition = () => {
      const footer = footerRef.current;
      if (!footer) return;
      const footerTop = footer.getBoundingClientRect().top + 100;
      const viewportHeight = window.innerHeight;
      if (footerTop < viewportHeight) {
        setFeedbackBottom(viewportHeight - footerTop + 30);
      } else {
        setFeedbackBottom(16);
      }
    };
    window.addEventListener("scroll", updateFeedbackPosition, {
      passive: true,
    });
    updateFeedbackPosition();
    return () => window.removeEventListener("scroll", updateFeedbackPosition);
  }, []);

  const isLandingPage =
    location?.pathname === "/" ||
    location?.pathname === "/ressurser" ||
    location?.pathname === "/identitet" ||
    location?.pathname === "/spor";
  const marginLeft = isLandingPage
    ? [0, null, null, "18rem"]
    : [0, null, null, "21rem"];

  const paddingTop = isLandingPage ? 0 : 8;
  const paddingRight = isLandingPage ? 0 : [2, 6, 6, 6];
  const marginX = isLandingPage ? 0 : [2, 6, 8, 0];
  usePageTracking();

  return (
    <HeaderOffsetContext value={headerOffset}>
      <Flex direction="column" minHeight="100vh" bg="bg" fontFamily="Vy Sans">
        <SiteHeader onHeightChange={setHeaderOffset} />

        <Flex
          marginX={marginX}
          marginRight={paddingRight}
          flex={1}
          position="relative"
          minWidth={0}
        >
          <LeftSidebar headerOffset={headerOffset} />
          {/* Add left margin on large screens to account for the fixed sidebar width (20rem) */}
          <Flex
            as="main"
            alignItems="stretch"
            marginLeft={marginLeft}
            paddingTop={paddingTop}
            flex={1}
            minWidth={0}
          >
            {children}
          </Flex>
        </Flex>
        {!isIdentitetPage && (
          <Flex
            position="fixed"
            bottom={`${feedbackBottom}px`}
            right={4}
            zIndex="banner"
          >
            <CardSelect>
              <CardSelectTrigger
                variant="floating"
                withChevron={false}
                icon={<SpeechBubbleOutline24Icon />}
              >
                Feedback?
              </CardSelectTrigger>
              <CardSelectContent minWidth="25rem">
                <FeedbackForm />
              </CardSelectContent>
            </CardSelect>
          </Flex>
        )}

        <Box ref={footerRef} position="relative" zIndex="sticky">
          <Footer />
        </Box>
      </Flex>
    </HeaderOffsetContext>
  );
};

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [haveSubmitted, setHaveSubmitted] = useState<boolean>(false);

  const location = useLocation();

  const onSubmit = () => {
    console.log("Feedback submitted:", { feedbackType, feedback });
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
          <Heading as="h3" variant="md" fontWeight="bold">
            What would you like to share?
          </Heading>
        </FieldsetLegend>
        <FieldsetContent display="flex" gap="3" flexDirection="column">
          <Field gap="1" fontSize="xs">
            <RadioGroup
              required
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
          <Field gap="1">
            <Textarea
              label="Your feedback"
              value={feedback}
              minHeight="6rem"
              onChange={(e) => setFeedback(e.target.value)}
              paddingTop="3"
            />
          </Field>
          <Button type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </FieldsetContent>
      </Stack>
    </Fieldset>
  ) : (
    <Box>
      <Stack gap="2">
        <Heading as="h3" variant="md" fontWeight="bold">
          Thank you for your feedback!
        </Heading>
        <Text>Feedback is reviewed once a week.</Text>
        <IdeIllustration width={200} height={140} />
        <Button variant="tertiary" onClick={handleWriteAnotherFeedback}>
          Write another feedback
        </Button>
      </Stack>
    </Box>
  );
};
