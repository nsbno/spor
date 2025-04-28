import {
  BusFill24Icon,
  BusOutline24Icon,
  EditOutline24Icon,
  FerryFill24Icon,
  FerryOutline24Icon,
  TicketControlFill30Icon,
  TrainFill24Icon,
  TrainOutline24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Alert,
  AttachedInputs,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  CardSelect,
  Checkbox,
  CheckboxGroup,
  ChoiceChip,
  CloseButton,
  Combobox,
  ContentLoader,
  DarkFullScreenLoader,
  DatePicker,
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Expandable,
  Flex,
  FloatingActionButton,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Input,
  Item,
  LightFullScreenLoader,
  Separator,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Image,
  LineIcon,
  InfoTag,
  TravelTag,
  List,
  ListItem,
  JumpButton,
  PlayPauseButton,
  SkipButton,
  NativeSelect,
  Nudge,
  NudgeActions,
  NudgeCloseTrigger,
  NudgeContent,
  NudgeTrigger,
  NumericStepper,
  Pagination,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PasswordInput,
  PhoneNumberInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PressableCard,
  ProgressBar,
  ProgressIndicator,
  ProgressLoader,
  RadioGroup,
  Radio,
  createListCollection,
  RadioCard,
  RadioCardGroup,
  RadioCardLabel,
  SearchInput,
  Select,
  SelectItem,
  StaticCard,
  SkeletonCircle,
  SkeletonText,
  ColorSpinner,
  DarkSpinner,
  LightSpinner,
  Stepper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  createToast,
  NudgeWizardStep,
  TextLink,
  TimePicker,
} from "@vygruppen/spor-react";
import React from "react";

export default function TestingPage() {
  const [open, setOpen] = React.useState(false);
  const [isPlaying, setPlaying] = React.useState(false);
  const transportationTypes = createListCollection({
    items: [
      {
        label: "Train",
        value: "train",
      },
      {
        label: "Bus",
        value: "bus",
      },
      {
        label: "Boat",
        value: "boat",
      },
    ],
  });
  return (
    <>
      <Stack textAlign="center" marginTop={"8"}>
        <Heading fontSize={"lg"}>Hello testers!</Heading>
        <Text>
          Here, you can test out the components to check if there are any
          problems with hydration or other issues. <br /> If you only want to
          view one component at a time, you can go to routes - testing -
          route.tsx and comment out the components you don't want to see.
        </Text>
      </Stack>

      <Stack marginInline={"10"} marginTop={"8"} marginBottom={"8"}>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Accordion</h2>
        <Expandable title="Read more about the summer disruption">
          <Text>
            The summer disruption is when BaneNOR closes significant portions of
            the railway network during periods throughout the summer to carry
            out necessary improvements.
          </Text>
        </Expandable>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Alert</h2>
        <Alert variant="info">
          Det er arbeid på strekningen Oslo - Drammen, som kan føre til ekstra
          mye å se på om man har vindusplass.
        </Alert>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>
          AttachedInputs
        </h2>
        <AttachedInputs>
          <Input label="Fornavn" />
          <Input label="Etternavn" />
        </AttachedInputs>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Badge</h2>
        <Flex gap={1} flexWrap="wrap" alignItems="center">
          <Badge colorPalette="white">I morgen</Badge>
          <Badge colorPalette="grey">Sykkel</Badge>
          <Badge colorPalette="light-blue">Test</Badge>
          <Badge colorPalette="dark-blue">Smartpris</Badge>
          <Badge colorPalette="orange">Beta</Badge>
          <Badge colorPalette="light-green">Raskest</Badge>
          <Badge colorPalette="dark-green">Nattog</Badge>
          <Badge colorPalette="red">Innstilt</Badge>
          <Badge colorPalette="light-yellow">Delvis instilt</Badge>
          <Badge colorPalette="yellow">Buss for tog</Badge>
        </Flex>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Box</h2>
        <Box backgroundColor="mint">En veldig enkel boks</Box>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Breadcrumb</h2>
        <Breadcrumb>
          <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
          <BreadcrumbLink href="/komponenter">Komponenter</BreadcrumbLink>
          <BreadcrumbLink href="/komponenter/breadcrumb">
            Breadcrumb
          </BreadcrumbLink>
        </Breadcrumb>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Button</h2>
        <Button variant="primary" size="md">
          Click me
        </Button>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Button Group</h2>
        <ButtonGroup>
          <Button variant="primary">One button</Button>
          <Button variant="secondary">Another button</Button>
        </ButtonGroup>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> CardSelect</h2>
        <CardSelect variant="core" size="md" label="Ways to travel">
          <Heading>Ways to travel</Heading>
          <Text>
            There are lots of ways to travel. Buses, trains and ferries are just
            three.
          </Text>
        </CardSelect>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Checkbox</h2>
        <CheckboxGroup defaultValue={["train", "ship"]} gap={3}>
          <Checkbox value="train">Train</Checkbox>
          <Checkbox value="bus">Bus</Checkbox>
          <Checkbox value="ship">Ship</Checkbox>
        </CheckboxGroup>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> ChoiceChip</h2>
        <Stack flexDirection="row">
          <ChoiceChip
            icon={{
              default: <TrainOutline24Icon />,
              checked: <TrainFill24Icon />,
            }}
          >
            Train
          </ChoiceChip>
          <ChoiceChip
            icon={{ default: <BusOutline24Icon />, checked: <BusFill24Icon /> }}
          >
            Bus
          </ChoiceChip>
          <ChoiceChip
            icon={{
              default: <FerryOutline24Icon />,
              checked: <FerryFill24Icon />,
            }}
          >
            Boat
          </ChoiceChip>
        </Stack>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> CloseButton</h2>
        <HStack gap={1}>
          <CloseButton size="xs" />
          <CloseButton size="sm" />
          <CloseButton size="md" />
          <CloseButton size="lg" />
        </HStack>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Combobox</h2>
        <Combobox label="Velg et land">
          <Item key="no" textValue="Norge">
            Norge
          </Item>
          <Item key="se" textValue="Sverige">
            Sverige
          </Item>
          <Item key="dk" textValue="Danmark">
            Danmark
          </Item>
          <Item key="fi" textValue="Finland">
            Finland
          </Item>
          <Item key="de" textValue="Tyskland">
            Tyskland
          </Item>
          <Item key="fr" textValue="Frankerike">
            Frankrike
          </Item>
          <Item key="nl" textValue="Nederland">
            Nederland
          </Item>
        </Combobox>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>
          Content loader
        </h2>
        <ContentLoader>Please wait while we find your tickets</ContentLoader>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Datepicker</h2>
        <Stack>
          <form>
            <DatePicker size="sm" label="Core" variant="core" />
          </form>
          <form>
            <DatePicker label="Floating" variant="floating" />
          </form>
          <form>
            <DatePicker label="Ghost" variant="ghost" />
          </form>
        </Stack>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Dialog</h2>
        <DialogRoot size="md">
          <DialogTrigger asChild>
            <Button size="md" onClick={() => setOpen(true)}>
              Open (medium size)
            </Button>
          </DialogTrigger>
          <DialogContent open={open}>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <Textarea
                label="Dette er et eksempel på en mellomlang venstrestilt."
                placeholder="Skriv inn tekst her."
              />
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="tertiary">Lukk</Button>
              </DialogActionTrigger>
              <DialogActionTrigger asChild>
                <Button variant="primary">Ok</Button>
              </DialogActionTrigger>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Drawer</h2>
        <Drawer placement="bottom" size="md">
          <DrawerTrigger asChild>
            <Button variant="secondary" size="md">
              Open a simple drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerCloseTrigger />
            </DrawerHeader>
            <DrawerBody>
              <Text variant="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>
          Floating Action Button
        </h2>
        <Flex flexDirection="column" alignItems="flex-end">
          <FloatingActionButton
            icon={<TicketControlFill30Icon />}
            position="static"
            isTextVisible={false}
            marginBottom={2}
          >
            Inspection
          </FloatingActionButton>
          <FloatingActionButton
            icon={<TicketControlFill30Icon />}
            position="static"
            isTextVisible={true}
          >
            Inspection
          </FloatingActionButton>
        </Flex>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>
          Full screen loader
        </h2>
        <SimpleGrid columns={[1, 2]} gap={6}>
          <LightFullScreenLoader />
          <DarkFullScreenLoader />
        </SimpleGrid>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Grid</h2>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem width="100%" height="10" bg="pine" borderRadius="sm" />
          <GridItem width="100%" height="10" bg="pine" borderRadius="sm" />
          <GridItem width="100%" height="10" bg="pine" borderRadius="sm" />
          <GridItem width="100%" height="10" bg="pine" borderRadius="sm" />
          <GridItem width="100%" height="10" bg="pine" borderRadius="sm" />
        </Grid>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Heading</h2>
        <Stack>
          <Heading as="h1" variant="2xl">
            Main heading
          </Heading>
          <Heading as="h2" variant="xl-display">
            Sub heading with a display font
          </Heading>
          <Heading as="h2" variant="xl-sans">
            Sub heading with a sans font
          </Heading>
          <Heading as="h3" variant="lg">
            Large heading
          </Heading>
          <Heading as="h4" variant="md">
            Medium heading
          </Heading>
          <Heading as="h5" variant="sm">
            Small heading
          </Heading>
        </Stack>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> IconButton</h2>
        <Flex gap={1} flexWrap="wrap" alignItems="center">
          <IconButton
            variant="primary"
            icon={<EditOutline24Icon />}
            aria-label="primary button"
          />
          <IconButton
            variant="secondary"
            icon={<EditOutline24Icon />}
            aria-label="secondary button"
          />
          <IconButton
            variant="tertiary"
            icon={<EditOutline24Icon />}
            aria-label="tertiary button"
          />
          <IconButton
            variant="ghost"
            icon={<EditOutline24Icon />}
            aria-label="ghost button"
          />
          <IconButton
            variant="floating"
            icon={<EditOutline24Icon />}
            aria-label="floating button"
          />
        </Flex>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Image</h2>
        <Box boxSize="sm">
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Input</h2>
        <Input label="Name" />
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Line tags</h2>
        <Flex gap={1} flexWrap="wrap">
          <InfoTag variant="local-train" title="L1" description="Lillestrøm" />
          <InfoTag variant="region-train" title="R1" description="Dombås" />
          <InfoTag
            variant="region-express-train"
            title="E2"
            description="Drammen"
          />
          <InfoTag
            variant="long-distance-train"
            title="D3"
            description="Stockholm"
          />
          <InfoTag
            variant="airport-express-train"
            title="F1"
            description="Oslo"
          />
          <InfoTag variant="vy-bus" title="VY123" description="Arendal" />
          <InfoTag variant="local-bus" title="46" description="Ullerntoppen" />
          <InfoTag variant="ferry" title="1450" description="Nesodden" />
          <InfoTag variant="subway" title="5" description="Østerås" />
          <InfoTag variant="tram" title="19" description="Ljabru" />
          <InfoTag variant="alt-transport" title="Alternativ transport" />
          <InfoTag variant="walk" title="5" description="min" />
        </Flex>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Lists</h2>
        <List>
          <ListItem>First example</ListItem>
          <ListItem>Second example</ListItem>
          <ListItem>Third example</ListItem>
          <ListItem>Fourth example</ListItem>
        </List>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>
          MediaController
        </h2>
        <Stack flexDirection="row">
          <SkipButton size="sm" direction="backward" />
          <JumpButton size="sm" direction="backward" />
          <PlayPauseButton
            size="lg"
            playing={isPlaying}
            onClick={() => setPlaying((c) => !c)}
          />
          <JumpButton size="sm" direction="forward" />
          <SkipButton size="sm" direction="forward" />
        </Stack>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> NativeSelect</h2>
        <NativeSelect label="Choose language">
          <option>Norwegian (Bokmål)</option>
          <option>Norwegian (Nynorsk)</option>
          <option>Sami</option>
          <option>Swedish</option>
          <option>Danish</option>
          <option>Finnish</option>
          <option>English</option>
        </NativeSelect>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Nudge</h2>
        <Nudge introducedDate="2029-02-19">
          <NudgeTrigger>Check this feature out</NudgeTrigger>
          <NudgeContent>
            We have done some changes to the app!
            <NudgeActions>
              <NudgeCloseTrigger>
                <Button variant="tertiary">Close</Button>
              </NudgeCloseTrigger>
              <Button variant="primary">Show me</Button>
            </NudgeActions>
          </NudgeContent>
        </Nudge>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>
          NumericStepper
        </h2>
        <NumericStepper />
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Pagination</h2>
        <Pagination count={20} pageSize={2} defaultPage={1}>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </Pagination>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>PasswordInput</h2>
        <PasswordInput label="Password" />
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>
          PhoneNumberInput
        </h2>
        <PhoneNumberInput label="Phone Number" />
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> Popover</h2>
        <Popover>
          <PopoverTrigger>
            <Button variant="primary">Click me</Button>
          </PopoverTrigger>

          <PopoverContent>This is the content of the popover</PopoverContent>
        </Popover>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>PressableCard</h2>
        <PressableCard onClick={() => console.log} padding={4}>
          A simple pressable card
        </PressableCard>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}> ProgressBar</h2>
        <ProgressBar
          value={50}
          marginY={3}
          maxWidth="300px"
          aria-label="Progress"
          label="50%"
        >
          Progress: 50%
        </ProgressBar>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>
          ProgressIndicator
        </h2>
        <ProgressIndicator numberOfSteps={3} activeStep={2} />
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>
          ProgressLoader
        </h2>
        <ProgressLoader
          label="Betaler"
          value={50}
          maxWidth="150px"
          aria-label="Progress"
        >
          Progress: 50%
        </ProgressLoader>

        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Radio</h2>
        <RadioGroup>
          <Radio value="bus">Buss</Radio>
          <Radio value="train">Tog</Radio>
          <Radio value="plane">Fly</Radio>
        </RadioGroup>

        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>RadioCard</h2>
        <RadioCardGroup>
          <RadioCardLabel>How do you want to travel?</RadioCardLabel>
          <Stack direction="row" gap="2">
            <RadioCard padding={4} value="bus">
              Bus
            </RadioCard>
            <RadioCard padding={4} value="train">
              Train
            </RadioCard>
            <RadioCard padding={4} value="taxi">
              Taxi
            </RadioCard>
          </Stack>
        </RadioCardGroup>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>SearchInput</h2>
        <SearchInput label="Search" />

        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Select</h2>

        <Select collection={transportationTypes} label="Choose transportation">
          {transportationTypes.items.map((item, index) => (
            <SelectItem key={index} item={item}>
              {item.label}
            </SelectItem>
          ))}
        </Select>

        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Separator</h2>
        <Stack>
          <Separator size="sm" />
          <Separator size="md" />
          <Separator size="lg" />
        </Stack>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Skeletons</h2>
        <SimpleGrid columns={[1, 2]} gap={3}>
          <StaticCard border borderWidth={1} p={3}>
            <Stack>
              <SkeletonCircle boxSize={6} mr={3} />
              <SkeletonText noOfLines={3} width="100%" />
            </Stack>
          </StaticCard>
          <StaticCard border borderWidth={1} p={3}>
            <Stack>
              <SkeletonCircle boxSize={6} mr={3} />
              <SkeletonText noOfLines={3} width="100%" />
            </Stack>
          </StaticCard>
        </SimpleGrid>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Spinner</h2>
        <Stack direction="row" flexDirection="column" justifyContent="center">
          <ColorSpinner width="58px" />
          <LightSpinner backgroundColor="darkTeal" width="58px" />
          <DarkSpinner width="58px" />
        </Stack>

        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Stack</h2>
        <Stack>
          <Text>Her er et avsnitt</Text>
          <Text>Her er et avsnitt til</Text>
          <Text>Her er enda et avsnitt</Text>
        </Stack>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>StaticCard</h2>
        <Grid
          gap={2}
          flexWrap="wrap"
          templateColumns="repeat(auto-fit, minmax(120px, 1fr))"
        >
          <StaticCard colorPalette="white" padding={3}>
            White
          </StaticCard>
          <StaticCard colorPalette="grey" padding={3}>
            Grey
          </StaticCard>
          <StaticCard colorPalette="yellow" padding={3}>
            Yellow
          </StaticCard>
          <StaticCard colorPalette="darkYellow" padding={3}>
            Dark yellow
          </StaticCard>
          <StaticCard colorPalette="red" padding={3}>
            Red
          </StaticCard>
          <StaticCard colorPalette="green" padding={3}>
            Green
          </StaticCard>
          <StaticCard colorPalette="blue" padding={3}>
            Blue
          </StaticCard>
          <StaticCard colorPalette="orange" padding={3}>
            Orange
          </StaticCard>
        </Grid>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Stepper</h2>
        <Stepper
          variant="base"
          onClick={() => {}}
          activeStep={1}
          steps={["Who", "What", "Where"]}
        />
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Switch</h2>
        <Flex gap={1}>
          <Switch size="sm" />
          <Switch size="md" />
          <Switch size="lg" />
        </Flex>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Table</h2>
        <Table size="md">
          <TableHeader>
            <TableRow>
              <TableColumnHeader>Country</TableColumnHeader>
              <TableColumnHeader>Capital</TableColumnHeader>
              <TableColumnHeader>Currency</TableColumnHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Norway</TableCell>
              <TableCell>Oslo</TableCell>
              <TableCell>Norwegian krone</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Canada</TableCell>
              <TableCell>Ottawa</TableCell>
              <TableCell>Canadian Dollar</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Japan</TableCell>
              <TableCell>Tokyo</TableCell>
              <TableCell>Yen</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Tabs</h2>
        <Tabs defaultValue="coming" fitted>
          <TabsList>
            <TabsTrigger value="coming">Kommende</TabsTrigger>
            <TabsTrigger value="completed">Fullført</TabsTrigger>
            <TabsTrigger value="cancelled">Avbestilt</TabsTrigger>
          </TabsList>
          <TabsContent value="coming">
            <Heading as="h2">Kommende</Heading>
            <Text>Kommende billeter</Text>
          </TabsContent>
          <TabsContent value="completed">
            <Heading>Fullført</Heading>
            <Text>Fullført billeter</Text>
          </TabsContent>
          <TabsContent value="cancelled">
            <Heading>Avbestilt</Heading>
            <Text>Avbestilte billeter</Text>
          </TabsContent>
        </Tabs>

        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Text</h2>
        <Stack>
          <Text variant="2xl">2xl - Togum ipsum skinnus sporveklsum</Text>
          <Text variant="xl-display">
            xl-display - Togum ipsum skinnus sporveklsum
          </Text>
          <Text variant="xl-sans">
            xl-sans - Togum ipsum skinnus sporveklsum
          </Text>
          <Text variant="lg">lg - Togum ipsum skinnus sporveklsum</Text>
          <Text variant="md">md - Togum ipsum skinnus sporveklsum</Text>
          <Text variant="sm">sm - Togum ipsum skinnus sporveklsum</Text>
          <Text variant="xs">xs - Togum ipsum skinnus sporveklsum</Text>
        </Stack>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>TextLink</h2>
        <Text>
          Here is an actual
          <TextLink
            variant="primary"
            size="md"
            href="https://www.youtube.com/watch?v=Zvz6kFVJpwo"
          >
            external link
          </TextLink>
          . This is
          <TextLink
            variant="primary"
            size="md"
            href="https://www.youtube.com/watch?v=Zvz6kFVJpwo"
            external={false}
          >
            also an external link
          </TextLink>
          , but it doesn't look like it.
        </Text>

        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Textarea</h2>
        <Textarea label="Description" />

        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>TimePicker</h2>
        <TimePicker />
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Toast</h2>
        <Flex gap="2">
          {["info", "success", "error"].map((variant) => (
            <Button
              key={variant}
              variant="secondary"
              onClick={() =>
                createToast({
                  variant,
                  text: `This is a ${variant} toast`,
                })
              }
            >
              {variant}
            </Button>
          ))}
        </Flex>
        <h2 style={{ marginTop: "2rem", fontWeight: "bold" }}>Wizard Nudge</h2>
        <Nudge introducedDate="2029-02-19">
          <NudgeTrigger>Check this feature out</NudgeTrigger>
          <NudgeContent>
            <NudgeWizardStep>This is step 1</NudgeWizardStep>
            <NudgeWizardStep>
              This is step 2, with a lot more content. Use this to show
              significant UI changes or more advanced functionality that
              requires more text or multiple steps
            </NudgeWizardStep>
            <NudgeWizardStep>
              It's important that Wizard Nudge is only used when absolutely
              necessary since it can take up a lot of space and be disruptive
              for users accustomed to the app's functionality.
            </NudgeWizardStep>
          </NudgeContent>
        </Nudge>
      </Stack>
    </>
  );
}
