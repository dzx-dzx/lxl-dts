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
}
export interface Block {
    readonly name: string
    readonly type: string
    readonly id: Integer
    readonly pos: IntPos

    getNbt():NbtCompound
    setNbt(nbt:NbtCompound):boolean
    getBlockState():any
    hasContainer():boolean
    getContainer():Container
    hasBlockEntity():boolean
    getBlockEntity():BlockEntity
    removeBlockEntity():boolean
}
export interface Device {

}
export interface Item {

}
export interface BlockEntity{

}
export interface Container {

}
export interface NbtCompound {

}
export function log(...args: any[]): void
export function colorLog(color: string, ...args: any[]): void
export function setTimeout(func: () => any, msec: Integer): Integer | null
export function setTimeout(code: string, msec: any): Integer | null
export function setInterval(code: string, msec: any): Integer | null
export function clearInterval(taskid: Integer): boolean | null

export interface mc {
    newIntPos(x: Integer, y: Integer, z: Integer, dimid: DimensionID): IntPos
    newFloatPos(x: Float, y: Float, z: Float, dimid: DimensionID): FloatPos

    runcmd(cmd: string): boolean
    runcmdEx(cmd: string): { success: boolean, output: string }
    regPlayerCmd(cmd: string, description: string, callback: (player: Player, args: string[]) => any, level: PermissionID): boolean
    regConsoleCmd(cmd: string, description: string, callback: (args: string[]) => any): boolean
    sendCmdOutput(output: string): boolean

    getPlayer(info: string): Player | null
    getOnlinePlayers(): Player[]
    broadcast(msg: string, type?: MessageID): boolean

    getBlock(pos: IntPos): Block
    getBlock(x: Integer, y: Integer, z: Integer, dimid: DimensionID): Block
    setBlock(pos:IntPos,block:Block):boolean
}