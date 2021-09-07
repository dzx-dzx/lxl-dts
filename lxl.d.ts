declare enum DimensionID {
    Unknown = -1,
    Overworld,
    Nether,
    End
}

declare enum DirectionID {
    North,
    East,
    South,
    West
}
declare enum GameModeID {
    Survival,
    Creative,
    Adventure,
    Spectator
}
declare enum MessageID {
    Raw,
    Chat,
    Popup,
    Tip,
    Json
}
declare type PermissionID = 0 | 1 | 2 | 3 | 4
declare type Integer = number
declare type Float = number
export enum Format {
    Black = "§0",
    DarkBlue = "§1",
    DarkGreen = "§2",
    DarkAqua = "§3",
    DarkRed = "§4",
    DarkPurple = "§5",
    Gold = "§6",
    Gray = "§7",
    DarkGray = "§8",
    Blue = "§9",
    Green = "§a",
    Aqua = "§b",
    Red = "§c",
    LightPurple = "§d",
    Yellow = "§e",
    White = "§f",
    MinecoinGold = "§g",
    Bold = "§l",
    Italics = "§o",
    Underline = "§n",
    StrikeThrough = "§m",
    Random = "§k",
    Clear = "§r"
}
export interface IntPos {
    x: Integer,
    y: Integer,
    z: Integer,
    dim: string,
    dimid: DimensionID
}
export interface FloatPos {
    x: Float,
    y: Float,
    z: Float,
    dim: string,
    dimid: DimensionID
}
export interface Player {
    readonly name: string,
    readonly pos: FloatPos,
    readonly blockPos: IntPos,
    readonly realName: string,
    readonly xuid: string,
    readonly uuid: string,
    readonly permLevel: PermissionID,
    readonly gameMode: GameModeID,
    readonly maxHealth: Integer,
    readonly health: Integer,
    readonly inAir: boolean,
    readonly inWater: Boolean,
    readonly sneaking: boolean,
    readonly speed: Float,
    readonly direction: DirectionID

    isOp(): boolean
    kick(msg?: string): boolean
    disconnect(msg?: string): boolean
    tell(msg: string, type?: MessageID): boolean
    sendText(msg: string, type?: MessageID): boolean
    runcmd(cmd: string): boolean
    teleport(pos: IntPos | FloatPos): boolean
    teleport(x: number, y: number, z: number, dimid: DimensionID): boolean
    kill(): boolean
    hurt(damage: Integer): boolean
    setOnFire(time: Integer): boolean
    rename(newname: string): boolean
    getDevice(): Device
    getHand(): Item
    getOffHand(): Item
    getInventory(): Container
    getArmor(): Container
    getEnderChest(): Container
    giveItem(item: Item): boolean
    clearItem(type: string): Integer
    refreshItems(): boolean
    refreshChunks(): boolean
    setPermLevel(level: PermissionID): boolean
    setGameMode(mode: GameModeID): boolean
    addLevel(count: Integer): boolean
    transServer(server: string, port: Integer): boolean
    crash(): boolean
    setSidebar(title: string, data: any, sortOrder: number): boolean
    removeSidebar(): boolean
    setBossBar(title: string, percent: Integer): boolean
    removeBossBar(): boolean
    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
    addTag(tag: string): boolean
    removeTag(tag: string): boolean
    hasTag(tag: string): boolean
    getAllTags(): string[]
    getAbilities(): any
    getAttributes(): any[]

    getScore(name: string): Integer
    setScore(name: string, value: Integer): boolean
    addScore(name: string, value: Integer): boolean
    reduceScore(name: string, value: Integer): boolean
    deleteScore(name: string): boolean

}
export interface Block {
    readonly name: string
    readonly type: string
    readonly id: Integer
    readonly pos: IntPos

    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
    getBlockState(): any
    hasContainer(): boolean
    getContainer(): Container
    hasBlockEntity(): boolean
    getBlockEntity(): BlockEntity | undefined
    removeBlockEntity(): boolean
}
export interface Device {
    readonly ip: string
    readonly avgPing: Integer
    readonly avgPacketLoss: Float
    readonly os: "Android" | "iOS" | "OSX" | "Amazon" | "GearVR" | "Hololens" | "Windows10" | "Win32" | "TVOS" | "PlayStation" | "Nintendo" | "Xbox" | "WindowsPhone" | "Unknown"
    readonly clientId: string
}
export interface Entity {
    readonly name: string
    readonly type: string
    readonly id: Integer
    readonly pos: FloatPos
    readonly blockPos: IntPos
    readonly maxHealth: Integer
    readonly health: Integer
    readonly inAir: boolean
    readonly inWater: boolean
    readonly speed: Float

    teleport(pos: IntPos | FloatPos): boolean
    teleport(x: Integer, y: Integer, z: Integer, dimid: DimensionID): boolean
    kill(): boolean
    hurt(damage: Integer): boolean
    setOnFire(time: Integer): boolean
    isPlayer(): boolean
    toPlayer(): Player | undefined
    getArmor(): Container
    hasContainer(): boolean
    getContainer(): Container
    refreshItems(): boolean
    addTag(tag: string): boolean
    removeTag(tag: string): boolean
    hasTag(tag: string): boolean
    getAllTags(): string[]
    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
}
export interface Item {
    readonly name: string
    readonly type: string
    readonly id: Integer
    readonly count: Integer
    readonly aux: Integer

    clone(): Item | undefined
    setNull(): boolean
    set(item: Item): boolean
    setAux(item: Item, aux: Integer): boolean
    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
    setLore(names: string[]): boolean
}
export interface BlockEntity {
    readonly pos: IntPos
    readonly type: Integer

    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
    getBlock(): Block
}
export interface Container {
    readonly size: Integer
    readonly type: string

    addItem(item: Item): boolean
    addItemToFirstEmptySlot(item: Item): boolean
    hasRoomFor(item: Item): boolean
    getItem(index: Integer): Item
    setItem(index: Integer, item: Item): boolean
    getAllItems(): Item[]
    removeAllItems(): boolean
    isEmpty(): boolean
}
export interface Objective {
    readonly name: string
    readonly displayName: string

    getScore(target: Player | string): Integer
    setScore(target: Player | string, score: Integer): Integer | undefined
    addScore(target: Player | string, score: Integer): Integer | undefined
    reduceScore(target: Player | string, score: Integer): Integer | undefined
    deleteScore(target: Player | string): boolean
    setDisplay(slot: "sidebar" | "belowname" | "list", sortOrder?: 0 | 1): boolean
}
export interface NbtCompound {

}
export function log(...args: any[]): void
export function colorLog(color: string, ...args: any[]): void
export function setTimeout(func: () => void, msec: Integer): Integer | undefined
export function setTimeout(code: string, msec: Integer): Integer | undefined
export function setInterval(code: string, msec: Integer): Integer | undefined
export function clearInterval(taskid: Integer): boolean | undefined

export interface mc {
    newIntPos(x: Integer, y: Integer, z: Integer, dimid: DimensionID): IntPos
    newFloatPos(x: Float, y: Float, z: Float, dimid: DimensionID): FloatPos

    runcmd(cmd: string): boolean
    runcmdEx(cmd: string): { success: boolean, output: string }
    regPlayerCmd(cmd: string, description: string, callback: (player: Player, args: string[]) => void, level: PermissionID): boolean
    regConsoleCmd(cmd: string, description: string, callback: (args: string[]) => void): boolean
    sendCmdOutput(output: string): boolean

    getPlayer(info: string): Player | undefined
    getOnlinePlayers(): Player[]
    broadcast(msg: string, type?: MessageID): boolean

    getBlock(pos: IntPos): Block
    getBlock(x: Integer, y: Integer, z: Integer, dimid: DimensionID): Block
    setBlock(pos: IntPos, block: Block): boolean
    setblock(x: Integer, y: Integer, z: Integer, dimid: DimensionID, block: Block): Block
    spawnParticle(pos: IntPos | FloatPos, type: string): boolean
    spawnParticle(x: Integer, y: Integer, z: Integer, dimid: DimensionID, type: string): boolean

    spawnMob(name: string, pos: IntPos | FloatPos): Entity
    spawnMob<T extends Integer | Float>(name: string, x: T, y: T, z: T, dimid: DimensionID): Entity | undefined
    explode(pos: IntPos | FloatPos, source: Entity | undefined, power: Float, range: Float, isDestroy: boolean, isFire: boolean): boolean
    explode<T extends Integer | Float>(x: T, y: T, z: T, dimid: DimensionID, source: Entity | undefined, power: Float, range: Float, isDestroy: boolean, isFire: boolean): boolean

    newItem(name: string, count: Integer): Item | undefined
    newItem(nbt: NbtCompound): Item | null
    spawnItem(item: Item, pos: IntPos | FloatPos): Entity | undefined
    spawnItem<T extends Integer | Float>(item: Item, x: T, y: T, z: T, dimid: DimensionID): Entity | undefined

    newScoreObjective(name: string, displayName: string): Objective | undefined
    getScoreObjective(name: string): Objective | undefined
    getAllScoreObjectives(): Objective[]
    getDisplayObjective(slot: "sidebar" | "belowname" | "list"): Objective | undefined

    removeScoreObjective(name: string): boolean
    clearDisplayObjective(slot: "sidebar" | "belowname" | "list"): boolean

    getBDSVersion(): string
    setMotd(motd: string): boolean

    listen(event: string, callback: (...args: any[]) => boolean | void): boolean
}