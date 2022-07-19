# Demo-app for developing spor-react-native packages

This is simple application for developing spor-react-native packages in isolation.

## Running iOS locally

Getting up and running locally is hard and time consuming the first time, and quick and easy the second time.

First – there are some steps you need to take to get your environment up and running. 
These steps are described in the [official React Native docs](https://reactnative.dev/docs/environment-setup) section.

Now that your environment is set up correctly, we can start setting up for development.

### TL;DR

Here's a script you can copy and run to get your environment up and running.

```bash
git clone git@github.com:nsbno/spor.git
cd spor
npm install
npm run build:rn
cd apps/rn-demo
npm install
cd ios
bundle install
pod install
cd ..
rm -rf node_modules/react node_modules/react-native
npm run ios
```

### Wait, what?

That was a lot of commands – so let's go through them one by one.

First, you need to clone the Spor repository to your local computer.

```bash
git clone https://github.com/nsbno/spor.git
```

Enter your newly created `spor` directory and run `npm install`. 
This will install all the dependencies we need to develop locally.

Run `npm run build:rn`. 
This will build all packages for React Native, so that you get stuff like types and code completion.

Navigate to the `apps/rn-demo` directory (this one).
Run `npm install` here as well. 
React Native isn't the best fit for monorepos, so to make it work, we need to install the dependencies twice. 🙄

Navigate to the `ios` folder, and run `bundle install`, followed by `pod install`.

Next, go back to the `apps/rn-demo` folder, and then run this command:

```bash
rm -rf node_modules/react node_modules/react-native
```

This will delete the React and React Native dependencies from this particular `node_modules`, but not from the root `node_modules`. This makes it so that the simulator can use the correct React Native version. It's stupid, but it works.

Finally, you're ready to start your development. 
Run `npm run ios` from the `apps/rn-demo` directory.
This will start an iOS simulator and install the app for the first time. 
It typically takes 5-10 minutes the first time.

With a bit of luck, you'll see the app running on your screen after a while.

