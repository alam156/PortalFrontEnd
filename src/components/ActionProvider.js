class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }
    handleOptions = (options) => {
        const message = this.createChatBotMessage(
            "How can I help you? Below are some possible options.",
            {
                widget: "overview",
                loading: true,
                terminateLoading: true,
                ...options
            }
        );

        this.addMessageToState(message);
    };

    handleGlobalStats = () => {
        const message = this.createChatBotMessage(
            "Here's the latest global stats.",
            {
                widget: "globalStatistics",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.addMessageToState(message);
    };

    handleLocalStats = () => {
        const message = this.createChatBotMessage(
            "Here's the latest stats in Sri Lanka.",
            {
                widget: "localStatistics",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.addMessageToState(message);
    };

    handleContact = () => {
        const message = this.createChatBotMessage(
            "Call ext(105) for getting more information.",
            {
                widget: "emergencyContact",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.addMessageToState(message);
    };

    handleMedicine = () => {
        const message = this.createChatBotMessage(
            "To have clinical medicine safely delivered to your home, please refer to the link below.",
            {
                widget: "medicineDelivery",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.addMessageToState(message);
    };

    handleJoke = () => {
        var jokes = [
            "Electronic signatures, or e-signatures, provide a convenient and secure way to sign documents digitally, eliminating the need for physical signatures.",
            "E-signatures are legally binding in many countries and industries, making them a reliable alternative to traditional ink signatures.",
            "Implementing e-signatures can help businesses streamline their workflows, reduce costs, and improve customer satisfaction by providing a faster and more efficient signing process.",
            "E-signature solutions often include features such as audit trails, authentication, and encryption to ensure the integrity and security of signed documents.",
            "E-signatures also offer environmental benefits by reducing paper waste and contributing to sustainability efforts.",
            "With the increasing popularity of remote work and digital transactions, e-signatures have become an essential tool for businesses looking to stay competitive and agile in today's fast-paced digital landscape."
        ];

        var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

        const message = this.createChatBotMessage(randomJoke);

        this.addMessageToState(message);
    };

    handleThanks = () => {
        const message = this.createChatBotMessage("You're welcome, and stay safe!");

        this.addMessageToState(message);
    };

    addMessageToState = (message) => {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message]
        }));
    };
}

export default ActionProvider;