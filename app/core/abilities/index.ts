import { Ability } from "../../types/enum/Ability"
import {
  AttackStrategy,
  SongOfDesireStrategy,
  ConfusingMindStrategy,
  KnowledgeThiefStrategy,
  WonderGuardStrategy,
  CorruptedNatureStrategy,
  CrabHammerStrategy,
  KingShieldStrategy,
  ExplosionStrategy,
  NightmareStrategy,
  ClangorousSoulStrategy,
  BonemerangStrategy,
  GrowlStrategy,
  RelicSongStrategy,
  DisarmingVoiceStrategy,
  HighJumpKickStrategy,
  GrassWhistleStrategy,
  TriAttackStrategy,
  EchoStrategy,
  PetalDanceStrategy,
  HyperVoiceStrategy,
  ShadowCloneStrategy,
  VoltSwitchStrategy,
  FireBlastStrategy,
  WheelOfFireStrategy,
  SeismicTossStrategy,
  GuillotineStrategy,
  RockSlideStrategy,
  HeatWaveStrategy,
  ThunderStrategy,
  HydroPumpStrategy,
  DracoMeteorStrategy,
  BlazeKickStrategy,
  WishStrategy,
  CalmMindStrategy,
  IronDefenseStrategy,
  MetronomeStrategy,
  SoakStrategy,
  IronTailStrategy,
  BlastBurnStrategy,
  ChargeStrategy,
  DischargeStrategy,
  BiteStrategy,
  DragonTailStrategy,
  DragonBreathStrategy,
  IcicleCrashStrategy,
  RootStrategy,
  TormentStrategy,
  StompStrategy,
  PaybackStrategy,
  NightSlashStrategy,
  BugBuzzStrategy,
  StringShotStrategy,
  StickyWebStrategy,
  PoisonStingStrategy,
  LeechLifeStrategy,
  HappyHourStrategy,
  TeleportStrategy,
  NastyPlotStrategy,
  ThiefStrategy,
  StunSporeStrategy,
  MeteorMashStrategy,
  HurricaneStrategy,
  BurnStrategy,
  SleepStrategy,
  SilenceStrategy,
  ConfusionStrategy,
  FreezeStrategy,
  ProtectStrategy,
  PoisonStrategy,
  OriginPulseStrategy,
  SeedFlareStrategy,
  HealBlockStrategy,
  RoarOfTimeStrategy,
  RockTombStrategy,
  RockSmashStrategy,
  HeadSmashStrategy,
  DiamondStormStrategy,
  DracoEnergyStrategy,
  DynamaxCannonStrategy,
  DynamicPunchStrategy,
  ElectroBoostStrategy,
  ElectroWebStrategy,
  FireTrickStrategy,
  FlameChargeStrategy,
  LeechSeedStrategy,
  LockOnStrategy,
  PsychUpStrategy,
  RazorWindStrategy,
  TwistingNetherStrategy,
  EarthquakeStrategy,
  SoftBoiledStrategy,
  ElectricSurgeStrategy,
  PsychicSurgeStrategy,
  MindBlownStrategy,
  PaydayStrategy,
  BeatUpStrategy,
  BlueFlareStrategy,
  FusionBoltStrategy,
  AuroraVeilStrategy,
  AquaJetStrategy,
  JudgementStrategy,
  ChatterStrategy,
  LiquidationStrategy,
  SteamEruptionStrategy,
  AppleAcidStrategy,
  ShadowBallStrategy,
  DiveStrategy,
  SpikeArmorStrategy,
  FutureSightStrategy,
  FakeTearsStrategy,
  SparklingAriaStrategy,
  DragonDartsStrategy,
  GrassySurgeStrategy,
  MistySurgeStrategy,
  SkyAttackStrategy,
  IllusionStrategy,
  SludgeStrategy,
  AuroraBeamStrategy,
  AgilityStrategy,
  SpiritShackleStrategy,
  WaterShurikenStrategy,
  ShadowSneakStrategy,
  MachPunchStrategy,
  UppercutStrategy,
  TripleKickStrategy,
  MawashiGeriStrategy,
  ForecastStrategy,
  SacredSwordStrategy,
  XScissorStrategy,
  PlasmaFistStrategy,
  SpectralThiefStrategy,
  GeomancyStrategy,
  DeathWingStrategy,
  SlackOffStrategy,
  DarkVoidStrategy,
  OverheatStrategy,
  HypnosisStrategy,
  MimicStrategy,
  HexStrategy,
  GrowthStrategy,
  HealOrderStrategy,
  ShellTrapStrategy,
  DigStrategy,
  FireSpinStrategy,
  SearingShotStrategy,
  PeckStrategy,
  SplashStrategy,
  CounterStrategy,
  CosmicPowerStrategy,
  PoisonPowderStrategy,
  SilverWindStrategy,
  IcyWindStrategy,
  GigatonHammerStrategy,
  AcrobaticsStrategy,
  AbsorbStrategy,
  RolloutStrategy,
  ThrashStrategy,
  SolarBeamStrategy,
  MagmaStormStrategy,
  SlashingClawStrategy,
  EruptionStrategy,
  MistBallStrategy,
  LusterPurgeStrategy,
  MudBubbleStrategy,
  LinkCableStrategy,
  MagicBounceStrategy,
  PoisonJabStrategy,
  ShellSmashStrategy,
  HelpingHandStrategy,
  AstralBarrageStrategy,
  BlizzardStrategy,
  WaterfallStrategy,
  PyroBallStrategy,
  WhirlpoolStrategy,
  SmokeScreenStrategy,
  PresentStrategy,
  LeafBladeStrategy,
  AnchorShotStrategy,
  SmogStrategy
} from "../attack-strategy"
import {
  HiddenPowerAStrategy,
  HiddenPowerBStrategy,
  HiddenPowerCStrategy,
  HiddenPowerDStrategy,
  HiddenPowerEStrategy,
  HiddenPowerFStrategy,
  HiddenPowerGStrategy,
  HiddenPowerHStrategy,
  HiddenPowerIStrategy,
  HiddenPowerJStrategy,
  HiddenPowerKStrategy,
  HiddenPowerLStrategy,
  HiddenPowerMStrategy,
  HiddenPowerNStrategy,
  HiddenPowerOStrategy,
  HiddenPowerPStrategy,
  HiddenPowerQStrategy,
  HiddenPowerRStrategy,
  HiddenPowerSStrategy,
  HiddenPowerTStrategy,
  HiddenPowerUStrategy,
  HiddenPowerVStrategy,
  HiddenPowerWStrategy,
  HiddenPowerXStrategy,
  HiddenPowerYStrategy,
  HiddenPowerZStrategy,
  HiddenPowerQMStrategy,
  HiddenPowerEMStrategy
} from "./hidden-power"

export * from "./hidden-power"

export const AbilityStrategy: { [key in Ability]: AttackStrategy } = {
  [Ability.SONG_OF_DESIRE]: new SongOfDesireStrategy(),
  [Ability.CONFUSING_MIND]: new ConfusingMindStrategy(),
  [Ability.KNOWLEDGE_THIEF]: new KnowledgeThiefStrategy(),
  [Ability.WONDER_GUARD]: new WonderGuardStrategy(),
  [Ability.CORRUPTED_NATURE]: new CorruptedNatureStrategy(),
  [Ability.CRABHAMMER]: new CrabHammerStrategy(),
  [Ability.KING_SHIELD]: new KingShieldStrategy(),
  [Ability.EXPLOSION]: new ExplosionStrategy(),
  [Ability.NIGHTMARE]: new NightmareStrategy(),
  [Ability.CLANGOROUS_SOUL]: new ClangorousSoulStrategy(),
  [Ability.BONEMERANG]: new BonemerangStrategy(),
  [Ability.GROWL]: new GrowlStrategy(),
  [Ability.RELIC_SONG]: new RelicSongStrategy(),
  [Ability.DISARMING_VOICE]: new DisarmingVoiceStrategy(),
  [Ability.HIGH_JUMP_KICK]: new HighJumpKickStrategy(),
  [Ability.GRASS_WHISTLE]: new GrassWhistleStrategy(),
  [Ability.TRI_ATTACK]: new TriAttackStrategy(),
  [Ability.ECHO]: new EchoStrategy(),
  [Ability.PETAL_DANCE]: new PetalDanceStrategy(),
  [Ability.HYPER_VOICE]: new HyperVoiceStrategy(),
  [Ability.SHADOW_CLONE]: new ShadowCloneStrategy(),
  [Ability.VOLT_SWITCH]: new VoltSwitchStrategy(),
  [Ability.FIRE_BLAST]: new FireBlastStrategy(),
  [Ability.WHEEL_OF_FIRE]: new WheelOfFireStrategy(),
  [Ability.SEISMIC_TOSS]: new SeismicTossStrategy(),
  [Ability.GUILLOTINE]: new GuillotineStrategy(),
  [Ability.ROCK_SLIDE]: new RockSlideStrategy(),
  [Ability.HEAT_WAVE]: new HeatWaveStrategy(),
  [Ability.THUNDER]: new ThunderStrategy(),
  [Ability.HYDRO_PUMP]: new HydroPumpStrategy(),
  [Ability.DRACO_METEOR]: new DracoMeteorStrategy(),
  [Ability.BLAZE_KICK]: new BlazeKickStrategy(),
  [Ability.WISH]: new WishStrategy(),
  [Ability.CALM_MIND]: new CalmMindStrategy(),
  [Ability.IRON_DEFENSE]: new IronDefenseStrategy(),
  [Ability.METRONOME]: new MetronomeStrategy(),
  [Ability.SOAK]: new SoakStrategy(),
  [Ability.IRON_TAIL]: new IronTailStrategy(),
  [Ability.BLAST_BURN]: new BlastBurnStrategy(),
  [Ability.CHARGE]: new ChargeStrategy(),
  [Ability.DISCHARGE]: new DischargeStrategy(),
  [Ability.BITE]: new BiteStrategy(),
  [Ability.DRAGON_TAIL]: new DragonTailStrategy(),
  [Ability.DRAGON_BREATH]: new DragonBreathStrategy(),
  [Ability.ICICLE_CRASH]: new IcicleCrashStrategy(),
  [Ability.ROOT]: new RootStrategy(),
  [Ability.TORMENT]: new TormentStrategy(),
  [Ability.STOMP]: new StompStrategy(),
  [Ability.PAYBACK]: new PaybackStrategy(),
  [Ability.NIGHT_SLASH]: new NightSlashStrategy(),
  [Ability.BUG_BUZZ]: new BugBuzzStrategy(),
  [Ability.STRING_SHOT]: new StringShotStrategy(),
  [Ability.STICKY_WEB]: new StickyWebStrategy(),
  [Ability.VENOSHOCK]: new PoisonStingStrategy(),
  [Ability.LEECH_LIFE]: new LeechLifeStrategy(),
  [Ability.HAPPY_HOUR]: new HappyHourStrategy(),
  [Ability.TELEPORT]: new TeleportStrategy(),
  [Ability.NASTY_PLOT]: new NastyPlotStrategy(),
  [Ability.THIEF]: new ThiefStrategy(),
  [Ability.STUN_SPORE]: new StunSporeStrategy(),
  [Ability.METEOR_MASH]: new MeteorMashStrategy(),
  [Ability.HURRICANE]: new HurricaneStrategy(),
  [Ability.BURN]: new BurnStrategy(),
  [Ability.SLEEP]: new SleepStrategy(),
  [Ability.SILENCE]: new SilenceStrategy(),
  [Ability.CONFUSION]: new ConfusionStrategy(),
  [Ability.FREEZE]: new FreezeStrategy(),
  [Ability.BLIZZARD]: new BlizzardStrategy(),
  [Ability.PROTECT]: new ProtectStrategy(),
  [Ability.POISON]: new PoisonStrategy(),
  [Ability.ORIGIN_PULSE]: new OriginPulseStrategy(),
  [Ability.SEED_FLARE]: new SeedFlareStrategy(),
  [Ability.HEAL_BLOCK]: new HealBlockStrategy(),
  [Ability.ROAR_OF_TIME]: new RoarOfTimeStrategy(),
  [Ability.ROCK_TOMB]: new RockTombStrategy(),
  [Ability.ROCK_SMASH]: new RockSmashStrategy(),
  [Ability.HEAD_SMASH]: new HeadSmashStrategy(),
  [Ability.DEFAULT]: new AttackStrategy(),
  [Ability.DIAMOND_STORM]: new DiamondStormStrategy(),
  [Ability.DRACO_ENERGY]: new DracoEnergyStrategy(),
  [Ability.DYNAMAX_CANNON]: new DynamaxCannonStrategy(),
  [Ability.DYNAMIC_PUNCH]: new DynamicPunchStrategy(),
  [Ability.ELECTRO_BOOST]: new ElectroBoostStrategy(),
  [Ability.ELECTRO_WEB]: new ElectroWebStrategy(),
  [Ability.FIRE_TRICK]: new FireTrickStrategy(),
  [Ability.FLAME_CHARGE]: new FlameChargeStrategy(),
  [Ability.LEECH_SEED]: new LeechSeedStrategy(),
  [Ability.LOCK_ON]: new LockOnStrategy(),
  [Ability.PSYCH_UP]: new PsychUpStrategy(),
  [Ability.RAZOR_WIND]: new RazorWindStrategy(),
  [Ability.TWISTING_NETHER]: new TwistingNetherStrategy(),
  [Ability.EARTHQUAKE]: new EarthquakeStrategy(),
  [Ability.SOFT_BOILED]: new SoftBoiledStrategy(),
  [Ability.ELECTRIC_SURGE]: new ElectricSurgeStrategy(),
  [Ability.PSYCHIC_SURGE]: new PsychicSurgeStrategy(),
  [Ability.MIND_BLOWN]: new MindBlownStrategy(),
  [Ability.PAYDAY]: new PaydayStrategy(),
  [Ability.BEAT_UP]: new BeatUpStrategy(),
  [Ability.BLUE_FLARE]: new BlueFlareStrategy(),
  [Ability.FUSION_BOLT]: new FusionBoltStrategy(),
  [Ability.AURORA_VEIL]: new AuroraVeilStrategy(),
  [Ability.AQUA_JET]: new AquaJetStrategy(),
  [Ability.JUDGEMENT]: new JudgementStrategy(),
  [Ability.CHATTER]: new ChatterStrategy(),
  [Ability.LIQUIDATION]: new LiquidationStrategy(),
  [Ability.STEAM_ERUPTION]: new SteamEruptionStrategy(),
  [Ability.APPLE_ACID]: new AppleAcidStrategy(),
  [Ability.SHADOW_BALL]: new ShadowBallStrategy(),
  [Ability.DIVE]: new DiveStrategy(),
  [Ability.SPIKE_ARMOR]: new SpikeArmorStrategy(),
  [Ability.FUTURE_SIGHT]: new FutureSightStrategy(),
  [Ability.FAKE_TEARS]: new FakeTearsStrategy(),
  [Ability.SPARKLING_ARIA]: new SparklingAriaStrategy(),
  [Ability.DRAGON_DARTS]: new DragonDartsStrategy(),
  [Ability.GRASSY_SURGE]: new GrassySurgeStrategy(),
  [Ability.MISTY_SURGE]: new MistySurgeStrategy(),
  [Ability.SKY_ATTACK]: new SkyAttackStrategy(),
  [Ability.ILLUSION]: new IllusionStrategy(),
  [Ability.SLUDGE]: new SludgeStrategy(),
  [Ability.AURORA_BEAM]: new AuroraBeamStrategy(),
  [Ability.AGILITY]: new AgilityStrategy(),
  [Ability.SPIRIT_SHACKLE]: new SpiritShackleStrategy(),
  [Ability.WATER_SHURIKEN]: new WaterShurikenStrategy(),
  [Ability.SHADOW_SNEAK]: new ShadowSneakStrategy(),
  [Ability.MACH_PUNCH]: new MachPunchStrategy(),
  [Ability.UPPERCUT]: new UppercutStrategy(),
  [Ability.TRIPLE_KICK]: new TripleKickStrategy(),
  [Ability.MAWASHI_GERI]: new MawashiGeriStrategy(),
  [Ability.FORECAST]: new ForecastStrategy(),
  [Ability.SACRED_SWORD]: new SacredSwordStrategy(),
  [Ability.X_SCISSOR]: new XScissorStrategy(),
  [Ability.PLASMA_FIST]: new PlasmaFistStrategy(),
  [Ability.SPECTRAL_THIEF]: new SpectralThiefStrategy(),
  [Ability.GEOMANCY]: new GeomancyStrategy(),
  [Ability.DEATH_WING]: new DeathWingStrategy(),
  [Ability.SLACK_OFF]: new SlackOffStrategy(),
  [Ability.DARK_VOID]: new DarkVoidStrategy(),
  [Ability.OVERHEAT]: new OverheatStrategy(),
  [Ability.HYPNOSIS]: new HypnosisStrategy(),
  [Ability.MIMIC]: new MimicStrategy(),
  [Ability.HEX]: new HexStrategy(),
  [Ability.GROWTH]: new GrowthStrategy(),
  [Ability.HEAL_ORDER]: new HealOrderStrategy(),
  [Ability.SHELL_TRAP]: new ShellTrapStrategy(),
  [Ability.DIG]: new DigStrategy(),
  [Ability.FIRE_SPIN]: new FireSpinStrategy(),
  [Ability.SEARING_SHOT]: new SearingShotStrategy(),
  [Ability.PECK]: new PeckStrategy(),
  [Ability.SPLASH]: new SplashStrategy(),
  [Ability.COUNTER]: new CounterStrategy(),
  [Ability.COSMIC_POWER]: new CosmicPowerStrategy(),
  [Ability.POISON_POWDER]: new PoisonPowderStrategy(),
  [Ability.SILVER_WIND]: new SilverWindStrategy(),
  [Ability.ICY_WIND]: new IcyWindStrategy(),
  [Ability.GIGATON_HAMMER]: new GigatonHammerStrategy(),
  [Ability.ACROBATICS]: new AcrobaticsStrategy(),
  [Ability.ABSORB]: new AbsorbStrategy(),
  [Ability.ROLLOUT]: new RolloutStrategy(),
  [Ability.THRASH]: new ThrashStrategy(),
  [Ability.SOLAR_BEAM]: new SolarBeamStrategy(),
  [Ability.MAGMA_STORM]: new MagmaStormStrategy(),
  [Ability.SLASHING_CLAW]: new SlashingClawStrategy(),
  [Ability.ERUPTION]: new EruptionStrategy(),
  [Ability.MIST_BALL]: new MistBallStrategy(),
  [Ability.LUSTER_PURGE]: new LusterPurgeStrategy(),
  [Ability.MUD_BUBBLE]: new MudBubbleStrategy(),
  [Ability.LINK_CABLE]: new LinkCableStrategy(),
  [Ability.MAGIC_BOUNCE]: new MagicBounceStrategy(),
  [Ability.HIDDEN_POWER_A]: new HiddenPowerAStrategy(),
  [Ability.HIDDEN_POWER_B]: new HiddenPowerBStrategy(),
  [Ability.HIDDEN_POWER_C]: new HiddenPowerCStrategy(),
  [Ability.HIDDEN_POWER_D]: new HiddenPowerDStrategy(),
  [Ability.HIDDEN_POWER_E]: new HiddenPowerEStrategy(),
  [Ability.HIDDEN_POWER_F]: new HiddenPowerFStrategy(),
  [Ability.HIDDEN_POWER_G]: new HiddenPowerGStrategy(),
  [Ability.HIDDEN_POWER_H]: new HiddenPowerHStrategy(),
  [Ability.HIDDEN_POWER_I]: new HiddenPowerIStrategy(),
  [Ability.HIDDEN_POWER_J]: new HiddenPowerJStrategy(),
  [Ability.HIDDEN_POWER_K]: new HiddenPowerKStrategy(),
  [Ability.HIDDEN_POWER_L]: new HiddenPowerLStrategy(),
  [Ability.HIDDEN_POWER_M]: new HiddenPowerMStrategy(),
  [Ability.HIDDEN_POWER_N]: new HiddenPowerNStrategy(),
  [Ability.HIDDEN_POWER_O]: new HiddenPowerOStrategy(),
  [Ability.HIDDEN_POWER_P]: new HiddenPowerPStrategy(),
  [Ability.HIDDEN_POWER_Q]: new HiddenPowerQStrategy(),
  [Ability.HIDDEN_POWER_R]: new HiddenPowerRStrategy(),
  [Ability.HIDDEN_POWER_S]: new HiddenPowerSStrategy(),
  [Ability.HIDDEN_POWER_T]: new HiddenPowerTStrategy(),
  [Ability.HIDDEN_POWER_U]: new HiddenPowerUStrategy(),
  [Ability.HIDDEN_POWER_V]: new HiddenPowerVStrategy(),
  [Ability.HIDDEN_POWER_W]: new HiddenPowerWStrategy(),
  [Ability.HIDDEN_POWER_X]: new HiddenPowerXStrategy(),
  [Ability.HIDDEN_POWER_Y]: new HiddenPowerYStrategy(),
  [Ability.HIDDEN_POWER_Z]: new HiddenPowerZStrategy(),
  [Ability.HIDDEN_POWER_QM]: new HiddenPowerQMStrategy(),
  [Ability.HIDDEN_POWER_EM]: new HiddenPowerEMStrategy(),
  [Ability.POISON_JAB]: new PoisonJabStrategy(),
  [Ability.SHELL_SMASH]: new ShellSmashStrategy(),
  [Ability.HELPING_HAND]: new HelpingHandStrategy(),
  [Ability.ASTRAL_BARRAGE]: new AstralBarrageStrategy(),
  [Ability.WATERFALL]: new WaterfallStrategy(),
  [Ability.PYRO_BALL]: new PyroBallStrategy(),
  [Ability.WHIRLPOOL]: new WhirlpoolStrategy(),
  [Ability.SMOKE_SCREEN]: new SmokeScreenStrategy(),
  [Ability.PRESENT]: new PresentStrategy(),
  [Ability.LEAF_BLADE]: new LeafBladeStrategy(),
  [Ability.ANCHOR_SHOT]: new AnchorShotStrategy(),
  [Ability.SMOG]: new SmogStrategy()
}
