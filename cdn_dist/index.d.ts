import { ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';
import type { CSSResult } from 'lit';
import type { LitElement } from 'lit';
import { PieSwitch } from '@justeattakeaway/pie-switch';
import type { PropertyValues } from 'lit';
import { TemplateResult } from 'lit';
import type { TemplateResult as TemplateResult_2 } from 'lit-html';

export declare interface CookieBannerLocale {
    banner: {
        title: string;
        description: string;
        cta: {
            managePreferences: string;
            necessaryOnly: string;
            acceptAll: string;
        };
    };
    preferencesManagement: {
        title: string;
        description: string;
        all: {
            title: string;
        };
        necessary: {
            title: string;
            description: string;
        };
        functional: {
            title: string;
            description: string;
        };
        analytical: {
            title: string;
            description: string;
        };
        personalized: {
            title: string;
            description: string;
        };
        cta: {
            save: {
                label: string;
                ariaLabel: string;
            };
        };
    };
}

export declare interface CookieBannerProps {
    /**
     * When true, sets the variant to "primary" for the button which accepts necessary cookies only.
     */
    hasPrimaryActionsOnly: boolean;
    /**
     * The URL of the cookie statement page the banner should link to.
     */
    cookieStatementLink: string;
    /**
     * The URL for the cookie technology link.
     */
    cookieTechnologiesLink: string;
    /**
     * Assigns the country used for dynamically localising the component strings
     */
    country: CountryCode;
    /**
     * Assigns the language used for dynamically localising the component strings
     */
    language: LanguageCode;
    /**
     * Allows consumers to pass in specific preference(s) to the component which will toggle
     * the switch to be on by default (if set to `true`).
     *
     * e.g. { 'functional': true }
     * or { 'functional': true, 'personalized': true, 'analytical': true }
     */
    defaultPreferences?: Partial<Record<PreferenceIds, boolean>>;
}

export declare const Country: {
    readonly BULGARIA: "bg";
    readonly DENMARK: "dk";
    readonly FRANCE: "fr";
    readonly GERMANY: "de";
    readonly GREAT_BRITAIN: "gb";
    readonly ISRAEL: "il";
    readonly ITALY: "it";
    readonly NETHERLANDS: "nl";
    readonly POLAND: "pl";
    readonly SLOVAKIA: "sk";
    readonly SPAIN: "es";
};

export declare type CountryCode = typeof Country[keyof typeof Country];

export declare interface CustomTagEnhancers {
    [key: string]: (tagContent: string) => TemplateResult;
}

export declare const defaultLanguage: Map<CountryCode, LanguageCode>;

export declare type DefaultProps = ComponentDefaultProps<CookieBannerProps>;

export declare const defaultProps: DefaultProps;

export declare const Language: {
    readonly BULGARIAN: "bg";
    readonly CATALAN: "ca";
    readonly DANISH: "da";
    readonly DUTCH: "nl";
    readonly ENGLISH: "en";
    readonly FRENCH: "fr";
    readonly GERMAN: "de";
    readonly HEBREW: "he";
    readonly ITALIAN: "it";
    readonly POLISH: "pl";
    readonly SLOVAK: "sk";
    readonly SPANISH: "es";
};

export declare type LanguageCode = typeof Language[keyof typeof Language];

/**
 * Event name for when all cookies are accepted.
 *
 * @constant
 */
export declare const ON_COOKIE_BANNER_ACCEPT_ALL = "pie-cookie-banner-accept-all";

/**
 * Event name for when a user clicks manage preferences.
 *
 * @constant
 */
export declare const ON_COOKIE_BANNER_MANAGE_PREFS = "pie-cookie-banner-manage-prefs";

/**
 * Event name for when all only necessary cookies are accepted.
 *
 * @constant
 */
export declare const ON_COOKIE_BANNER_NECESSARY_ONLY = "pie-cookie-banner-necessary-only";

/**
 * Event name for when a user clicks save preferences.
 *
 * @constant
 */
export declare const ON_COOKIE_BANNER_PREFS_SAVED = "pie-cookie-banner-prefs-saved";

/**
 * @tagname pie-cookie-banner
 * @event {CustomEvent} pie-cookie-banner-accept-all - when all cookies are accepted.
 * @event {CustomEvent} pie-cookie-banner-necessary-only - when all only necessary cookies are accepted.
 * @event {CustomEvent} pie-cookie-banner-manage-prefs - when a user clicks manage preferences.
 * @event {CustomEvent} pie-cookie-banner-prefs-saved - when a user clicks save preferences.
 */
export declare class PieCookieBanner extends LitElement implements CookieBannerProps {
    private _isCookieBannerHidden;
    private _isModalOpen;
    private _locale;
    hasPrimaryActionsOnly: boolean;
    defaultPreferences: Partial<Record<PreferenceIds, boolean>>;
    cookieStatementLink: string;
    cookieTechnologiesLink: string;
    country: CountryCode;
    language: LanguageCode;
    _preferencesNodes: NodeListOf<PieSwitch>;
    updated(changedProperties: PropertyValues<this>): Promise<void>;
    private _setLocaleBasedOnCountryAndLanguage;
    private _customTagEnhancers;
    private _localiseText;
    private _localiseRichText;
    /**
     * Handles closing the modal and re-displaying the cookie banner
     * and making the cookie banner visible
     */
    private _displayCookieBanner;
    /**
     * Handles saving the user cookie preferences, closing the modal and the cookie banner
     * Creates a state object for the save event, indicating the checked status
     * of each preference except for the `all` preference.
     * @example {
     *  functional: false,
     *  necessary: true
     * }
     */
    private _handlePreferencesSaved;
    /**
     * Hides the cookie banner and emits the necessary only event
     */
    private _onNecessaryOnly;
    /**
     * Hides the cookie banner and emits the accept all event
     */
    private _onAcceptAll;
    /**
     * Opens the manage preferences modal and emits an event letting users know
     */
    private _openManagePreferencesModal;
    /**
     * Handles the logic of the switch nodes (preferences).
     * Clicking the “all” switch should turn on all preferences.
     * When the “all” switch is checked, and one of the other preferences is clicked,
     * then the “all” switch should be unchecked.
     * if all switches are checked, the `all` switch should
     * be turned on automatically
     */
    private _handleSwitchStates;
    /**
     * Renders the content of the preference item.
     * @private
     */
    private renderPreference;
    /**
     * Renders the modal content.
     * @private
     */
    private renderModalContent;
    render(): TemplateResult_2<1>;
    static styles: CSSResult;
}

export declare interface Preference {
    id: PreferenceIds;
    checked?: boolean;
    disabled?: boolean;
    hasDivider?: boolean;
    hasDescription?: boolean;
}

export declare type PreferenceIds = 'all' | 'necessary' | 'functional' | 'analytical' | 'personalized';

export declare const preferences: Preference[];

export { }
